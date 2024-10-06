import { NextResponse } from 'next/server';

export async function POST(req) {
    const { email } = await req.json(); // Collect email from request body

    // Prepare the email template payload for Brevo API
    const emailData = {
        sender: {
            email: 'waitlist@risingrootsfoundation.org', // Set your Brevo sender email
            name: 'Waitlist - Rising Roots Foundation',   // Set sender name
        },
        subject: 'You’re on our Waitlist!', // Set subject
        templateId: 1, // Your predefined template ID
        params: {
            greeting: 'You’re on our Waitlist!', // Greeting
        },
        messageVersions: [
            {
                to: [
                    {
                        email: email,   // The email collected from the subscription form
                        name: 'User',   // Placeholder name, can be left static
                    },
                ],
                params: {
                    greeting: 'You’re on our Waitlist!', // Greeting
                },
                subject: 'You’re on our Waitlist!', // Subject for the email
            },
        ],
    };

    try {
        // Send the email using Brevo API
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY, // Use your Brevo API key stored in environment variable
                'content-type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Email sent successfully:', result);
            return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 });
        } else {
            const error = await response.json();
            console.error('Error sending email:', error);
            return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error in email process:', error);
        return NextResponse.json({ error: 'Error processing subscription.' }, { status: 500 });
    }
}
