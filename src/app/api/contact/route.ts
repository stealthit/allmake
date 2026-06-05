import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, categories, message, company, type } = body;

        // Check if SMTP is configured
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('❌ [SMTP Error] Environment variables are not set. Check .env file.');
            console.log('--- Submission Data ---');
            console.log(body);

            // In development, we might want to return 200 to let the UI proceed even if email fails
            return NextResponse.json(
                { message: 'SMTP not configured. Submission logged to console.' },
                { status: 200 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // Use true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            // Add custom TLS options for better compatibility
            tls: {
                rejectUnauthorized: false
            }
        });

        const displayCategories = Array.isArray(categories) ? categories.join(', ') : (categories || '-');
        const displayType = type || '일반 문의';
        const displayCompany = company || '-';
        const displayMessage = message || '(내용 없음)';

        console.log(`📧 Attempting to send email: ${displayType} from ${name} (${email})`);

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER, // Better to use the authenticated email
            replyTo: `"${name}" <${email}>`, // Customer's email to reply to
            to: process.env.ADMIN_EMAIL || 'min@stealthinteractive.co.kr',
            subject: `[STEALTH] ${displayType}: ${name}님`,
            text: `
                새로운 프로젝트 문의가 접수되었습니다.

                상세 정보:
                - 유형: ${displayType}
                - 고객명: ${name}
                - 회사명: ${displayCompany}
                - 이메일: ${email}
                - 연락처: ${phone}
                - 의뢰 항목: ${displayCategories}

                문의 내용:
                ${displayMessage}
            `,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #000; border-bottom: 2px solid #5EEAD4; padding-bottom: 10px;">새로운 프로젝트 문의</h2>
                    <p style="margin-bottom: 20px;">STEALTH 웹사이트를 통해 새로운 의뢰(${displayType})가 접수되었습니다.</p>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="background: #f9f9f9;">
                            <th style="padding: 10px; border: 1px solid #eee; text-align: left; width: 100px;">고객명</th>
                            <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <th style="padding: 10px; border: 1px solid #eee; text-align: left;">회사명</th>
                            <td style="padding: 10px; border: 1px solid #eee;">${displayCompany}</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <th style="padding: 10px; border: 1px solid #eee; text-align: left;">이메일</th>
                            <td style="padding: 10px; border: 1px solid #eee;">${email}</td>
                        </tr>
                        <tr>
                            <th style="padding: 10px; border: 1px solid #eee; text-align: left;">연락처</th>
                            <td style="padding: 10px; border: 1px solid #eee;">${phone}</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <th style="padding: 10px; border: 1px solid #eee; text-align: left;">의뢰 항목</th>
                            <td style="padding: 10px; border: 1px solid #eee;">${displayCategories}</td>
                        </tr>
                    </table>

                    <h3 style="margin-top: 30px; border-left: 4px solid #5EEAD4; padding-left: 10px;">문의 내용</h3>
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${displayMessage}</div>
                    
                    <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">본 메일은 STEALTH 시스템에서 자동으로 발송되었습니다.</p>
                </div>
            `,
        };

        // Send email
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('✅ Email sent successfully:', info.messageId);
            return NextResponse.json(
                { message: 'Inquiry sent successfully', messageId: info.messageId },
                { status: 200 }
            );
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (mailError: any) {
            console.error('❌ [SMTP Send Error]:', mailError.message);

            // Fallback: try sending to SMTP_USER if ADMIN_EMAIL fails
            if (process.env.ADMIN_EMAIL && process.env.ADMIN_EMAIL !== process.env.SMTP_USER) {
                try {
                    console.log('🔄 Attempting fallback to SMTP_USER...');
                    const fallbackOptions = {
                        ...mailOptions,
                        to: process.env.SMTP_USER,
                        subject: `[FALLBACK] ${mailOptions.subject}`
                    };
                    await transporter.sendMail(fallbackOptions);
                    console.log('✅ Fallback email sent successfully!');
                    return NextResponse.json(
                        { message: 'Inquiry sent (fallback)', warning: 'Primary delivery failed' },
                        { status: 200 }
                    );
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (fallbackError: any) {
                    console.error('❌ [Fallback Failed]:', fallbackError.message);
                }
            }

            // If we are here, everything failed.
            // In development/test, we might return 200 to allow UI testing
            return NextResponse.json(
                {
                    message: 'Email sending failed',
                    error: mailError.message,
                    code: mailError.code,
                    response: mailError.response
                },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('❌ [SERVER ERROR]:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
