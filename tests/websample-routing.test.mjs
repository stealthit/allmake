import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const samples = JSON.parse(await readFile(new URL('../tools/websample/samples.json', import.meta.url)));

const origin = process.env.WEBSAMPLE_TEST_ORIGIN || 'http://127.0.0.1:8771';
const read = (path, options = {}) => fetch(new URL(path, origin), {
  headers: { 'accept-language': 'en-US,en;q=0.9' }, ...options,
});

test('catalogue entry keeps the non-localized path, including its no-slash URL', async () => {
  for (const path of ['/websample', '/websample/', '/websample/index.html']) {
    const response = await read(path);
    assert.equal(response.status, 200, path);
    assert.match(new URL(response.url).pathname, /^\/websample(?:\/|$)/);
    const html = await response.text();
    assert.match(html, /홈페이지 디자인 샘플/);
    assert.equal((html.match(/class="sample-card"/g) || []).length, 30);
    assert.match(html, /src="\/websample\/assets\/app\.js/);
  }
});

test('sample detail pages and their static files remain under the sample prefix', async () => {
  for (const {id: sample} of samples) {
    const response = await read(`/websample/samples/${sample}.html`);
    assert.equal(response.status, 200, sample);
    const html = await response.text();
    assert.match(html, /id="sample-footer-slot"/);
    assert.match(html, /href="\/websample\/footer-layouts\.html\?sample=/);
  }
  for (const [path, contentType] of [
    ['/websample/assets/base.css', /text\/css/],
    ['/websample/assets/footer-picker.js', /javascript/],
    ['/websample/assets/PretendardVariable.woff2', /font|woff/],
  ]) {
    const response = await read(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type'), contentType);
  }
});

test('similar names do not bypass locale routing; existing language homes remain intact', async () => {
  const response = await read('/websampled', { redirect: 'manual' });
  assert.ok([307, 308].includes(response.status));
  assert.equal(new URL(response.headers.get('location'), origin).pathname, '/en/websampled');
  for (const language of ['en', 'ko']) {
    const home = await read(`/${language}`);
    assert.equal(home.status, 200, language);
    const html = await home.text();
    assert.match(html, /STEALTH/);
    assert.doesNotMatch(html, /class="catalogue-header"/);
  }
});

test('company browser identity is consistent across localized and sample pages', async () => {
  const title = '스텔스인터렉티브 | STEALTH INTERACTIVE';
  for (const path of ['/en', '/ko', '/websample', '/websample/footer-layouts.html', ...samples.map(s => `/websample/samples/${s.id}.html`)]) {
    const response = await read(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal(html.match(/<title>(.*?)<\/title>/s)?.[1], title, path);
    assert.match(html, /\/branding\/stealth-favicon\.svg\?v=20261125-dark/, path);
  }
  const icon = await read('/favicon.ico');
  assert.equal(icon.status, 200);
  const bytes = Buffer.from(await icon.arrayBuffer());
  assert.equal(bytes.readUInt16LE(2), 1);
  assert.equal(bytes.readUInt16LE(4), 3);
  for (let i = 0; i < 3; i++) {
    const offset = bytes.readUInt32LE(6 + i * 16 + 12);
    assert.equal(bytes[offset + 25], 6, 'ICO PNG payload must be RGBA for Next image decoding');
  }
});
