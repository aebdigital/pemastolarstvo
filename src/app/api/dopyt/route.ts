import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real application, you would send an email with the door configuration here
        console.log('New Door Inquiry Submission:', body);

        return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });
    } catch (error) {
        console.error('Inquiry Form Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send inquiry' },
            { status: 500 }
        );
    }
}
