import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import net from 'node:net';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

let smtp, app, origin, rejectMail = false;
const captured = [];
const sockets = new Set();
const valid = { customerName: '테스트 담당자', email: 'reply@example.com', phone: '010-0000-0000', business: '테스트 업체', needs: '설비 소개 홈페이지 제작 문의입니다.', schedule: '다음 달', sample: 'automation', footer: 'receipt', footerLabel: '영수증형', consent: true, companyWebsite: '' };
const post = (body, headers = {}) => fetch(origin + '/api/websample-inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });

before(async () => {
  smtp = net.createServer(socket => {
    sockets.add(socket); socket.on('close', () => sockets.delete(socket));
    socket.setEncoding('utf8'); socket.write('220 local-test SMTP\r\n');
    let buffer = '', data = false, message = '', recipient = '';
    socket.on('data', chunk => {
      buffer += chunk;
      while (buffer.includes('\r\n')) {
        const end = buffer.indexOf('\r\n'), line = buffer.slice(0, end); buffer = buffer.slice(end + 2);
        if (data) {
          if (line === '.') { data = false; captured.push({ recipient, message }); socket.write('250 accepted\r\n'); }
          else message += line + '\r\n';
        } else if (/^EHLO|^HELO/.test(line)) socket.write('250-local-test\r\n250 AUTH PLAIN LOGIN\r\n');
        else if (/^AUTH/.test(line)) socket.write('235 authenticated\r\n');
        else if (/^MAIL FROM/.test(line)) { message = ''; socket.write('250 sender OK\r\n'); }
        else if (/^RCPT TO/.test(line)) { recipient = line; socket.write(rejectMail ? '550 rejected for test\r\n' : '250 recipient OK\r\n'); }
        else if (line === 'DATA') { data = true; socket.write('354 Send data\r\n'); }
        else if (line === 'QUIT') socket.end('221 goodbye\r\n');
        else socket.write('250 OK\r\n');
      }
    });
  });
  await new Promise(resolve => smtp.listen(0, '127.0.0.1', resolve));
  const reserve = net.createServer(); await new Promise(resolve => reserve.listen(0, '127.0.0.1', resolve));
  const port = reserve.address().port; await new Promise(resolve => reserve.close(resolve));
  origin = `http://127.0.0.1:${port}`;
  app = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
    cwd: fileURLToPath(new URL('../', import.meta.url)),
    env: { ...process.env, SMTP_HOST: '127.0.0.1', SMTP_PORT: String(smtp.address().port), SMTP_USER: 'test@example.com', SMTP_PASS: 'local-test-only', ADMIN_EMAIL: 'different@example.com' }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  let output = '';
  app.stdout.on('data', data => output += data);
  app.stderr.on('data', data => output += data);
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    if (app.exitCode !== null) throw new Error('Next server exited: ' + output);
    try { if ((await fetch(origin + '/websample')).ok) return; } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Next server did not start: ' + output);
});
after(async () => {
  app?.kill('SIGTERM');
  for (const socket of sockets) socket.destroy();
  if (smtp) await new Promise(resolve => smtp.close(resolve));
});

test('invalid fields, missing consent, honeypot and foreign origin never send mail', async () => {
  for (const body of [{ ...valid, consent: false }, { ...valid, email: 'bad-address' }, { ...valid, sample: 'missing' }, { ...valid, companyWebsite: 'spam' }, { ...valid, customerName: 'Name\r\nBcc: attacker@example.com' }]) assert.equal((await post(body)).status, 400);
  assert.equal((await post(valid, { Origin: 'https://other.example' })).status, 403);
  assert.equal((await post({ ...valid, needs: 'x'.repeat(18000) })).status, 413);
  assert.equal(captured.length, 0);
});
test('successful inquiry sends the selected design and reply address only to the fixed recipient', async () => {
  const response = await post(valid, { Origin: origin });
  assert.equal(response.status, 200); assert.equal((await response.json()).success, true);
  assert.equal(captured.length, 1);
  assert.equal(captured[0].recipient, 'RCPT TO:<min@stealthinteractive.co.kr>');
  assert.match(captured[0].message, /Reply-To:.*<reply@example.com>/);
  const body = captured[0].message.split('\r\n\r\n').slice(1).join('\r\n\r\n');
  const decoded = /Content-Transfer-Encoding: base64/i.test(captured[0].message) ? Buffer.from(body.replace(/\s/g, ''), 'base64').toString('utf8') : Buffer.from(body.replace(/=\r\n/g, '').replace(/=([A-F0-9]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16))), 'latin1').toString('utf8');
  for (const text of ['F-05', '퓨처 모션', '영수증형', valid.needs, valid.business, valid.schedule]) assert(decoded.includes(text), text);
});
test('new interaction sample identities are included in inquiry mail', async () => {
  const response = await post({ ...valid, sample: 'motion-product' });
  assert.equal(response.status, 200); assert.equal((await response.json()).success, true);
  assert.equal(captured.length, 2);
  const message = captured[1].message, body = message.split('\r\n\r\n').slice(1).join('\r\n\r\n');
  const decoded = /Content-Transfer-Encoding: base64/i.test(message) ? Buffer.from(body.replace(/\s/g, ''), 'base64').toString('utf8') : Buffer.from(body.replace(/=\r\n/g, '').replace(/=([A-F0-9]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16))), 'latin1').toString('utf8');
  assert(decoded.includes('B-08') && decoded.includes('오비트 플로우'));
});
test('SMTP rejection returns failure rather than a success notice', async () => {
  rejectMail = true;
  const response = await post(valid);
  assert.equal(response.status, 502); assert.equal((await response.json()).success, false);
  assert.equal(captured.length, 2);
});
