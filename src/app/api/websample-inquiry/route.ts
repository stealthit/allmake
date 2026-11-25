import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import samples from '../../../../tools/websample/samples.json';

export const runtime = 'nodejs';
const recipient = 'min@stealthinteractive.co.kr';
const attempts = new Map<string, { count: number; expires: number }>();
const emailPattern = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;

export async function POST(request: Request) {
  const respond = (message: string, status: number, success = false) =>
    NextResponse.json({ success, message }, { status });
  const origin = request.headers.get('origin');
  let sameOrigin = true;
  if (origin) {
    try { sameOrigin = new URL(origin).host === request.headers.get('host'); }
    catch { sameOrigin = false; }
  }
  if (!sameOrigin) {
    return respond('현재 홈페이지에서 다시 문의해 주세요.', 403);
  }
  let body;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw) > 16000) return respond('문의 내용이 너무 깁니다.', 413);
    body = JSON.parse(raw);
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid body');
  } catch {
    return respond('입력 내용을 확인해 주세요.', 400);
  }
  const fields: Record<string, string> = {};
  const limits: Record<string, number> = { customerName: 80, email: 254, phone: 40, business: 100, needs: 1500, schedule: 100, sample: 50, footer: 50, footerLabel: 100 };
  for (const [key, max] of Object.entries(limits)) {
    if (body[key] !== undefined && typeof body[key] !== 'string') return respond('입력 내용을 확인해 주세요.', 400);
    fields[key] = (body[key] || '').trim();
    if (fields[key].length > max || (key !== 'needs' && /[\r\n]/.test(fields[key]))) {
      return respond('입력 내용의 길이와 형식을 확인해 주세요.', 400);
    }
  }
  const sample = samples.find(s => s.id === fields.sample);
  if (!fields.customerName || !emailPattern.test(fields.email) || !fields.needs || body.consent !== true || body.companyWebsite || (!sample && fields.sample !== 'undecided')) {
    return respond('이름, 이메일, 문의 내용과 개인정보 동의를 확인해 주세요.', 400);
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return respond('메일 연결을 확인하고 있습니다. 잠시 후 다시 시도하거나 min@stealthinteractive.co.kr로 문의해 주세요.', 503);
  }
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const now = Date.now();
  for (const [key, entry] of attempts) if (entry.expires <= now) attempts.delete(key);
  const entry = attempts.get(ip) || { count: 0, expires: now + 10 * 60 * 1000 };
  if (entry.count >= 5) return respond('문의가 여러 번 접수되었습니다. 잠시 후 다시 시도해 주세요.', 429);
  if (attempts.size < 5000 || attempts.has(ip)) attempts.set(ip, { ...entry, count: entry.count + 1 });

  const sampleLabel = sample ? `${sample.sample_code} ${sample.design_name} · ${sample.category}` : '아직 고민 중';
  const text = [
    '홈페이지 샘플 제작 문의', '',
    `고객명: ${fields.customerName}`, `회신 이메일: ${fields.email}`,
    `연락처: ${fields.phone || '미입력'}`, `업종 / 업체명: ${fields.business || '미입력'}`,
    `본문 디자인: ${sampleLabel}`, `푸터 스타일: ${fields.footerLabel || fields.footer || '본문 추천 스타일'}`,
    `희망 일정: ${fields.schedule || '상담 시 협의'}`, '', '문의 내용:', fields.needs, '',
    '접수 경로: https://www.stealthinteractive.co.kr/websample',
  ].join('\n');
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port, secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  });
  try {
    const info = await transport.sendMail({
      from: { name: 'STEALTH 홈페이지 샘플', address: process.env.SMTP_USER },
      to: recipient, replyTo: { name: fields.customerName, address: fields.email },
      subject: `[홈페이지 제작 문의] ${sample ? sample.sample_code : '디자인 미정'} · ${fields.customerName}`, text,
    });
    if (!info.accepted?.some(address => (typeof address === 'string' ? address : address.address).toLowerCase() === recipient)) throw new Error('Recipient not accepted');
    return respond('문의가 전송되었습니다. 남겨주신 이메일로 연락드리겠습니다.', 200, true);
  } catch {
    return respond('메일 전송에 실패했습니다. 입력 내용은 유지됩니다. 다시 시도하거나 min@stealthinteractive.co.kr로 문의해 주세요.', 502);
  } finally {
    transport.close();
  }
}
