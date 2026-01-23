
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Server-side logging to simulate email sending
        console.log('================================================');
        console.log('📨 [Contact Form Submission Received]');
        console.log('------------------------------------------------');
        console.log(`👤 Name      : ${body.name}`);
        console.log(`📧 Email     : ${body.email}`);
        console.log(`📱 Phone     : ${body.phone}`);
        console.log(`☑️ Categories: ${Array.isArray(body.categories) ? body.categories.join(', ') : body.categories}`);
        console.log(`📝 Message   :`);
        console.log(body.message);
        console.log('================================================');

        return NextResponse.json(
            { message: 'Inquiry received successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('SERVER ERROR:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
