import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, email, message } = await req.json(); // Collect name, email, and message from request body

    // Prepare the email template payload for Brevo API
    const emailData = {
        sender: {
            email: "enquiries@risingrootsfoundation.org",
            name: "Enquiries - RRF",
        },
        templateId: 4,
        subject: `NEW ENQUIRIES from ${name}`,
        params: {
            nameData: name,
            emailData: email,
            messageData: message,
            greeting: `Hello ${name},`,
        },
        to: [
            {
                email: "contact@risingrootsfoundation.org",
                name: "RRF Enquiries",
            },
        ],
        replyTo: {
            email: email,
            name: name,
        },
        headers: {
            "X-Mailin-Tag": "transactional",
            Importance: "high",
        },
        tags: ["transactional"],
        track_opens: false, // Disable open tracking
        track_clicks: false, // Disable click tracking
        htmlContent: `<h1>NEW ENQUIRIES</h1><p>Hello, you have a new enquiry from ${name}. Message: ${message}</p>`,
        textContent: `NEW ENQUIRIES from ${name}: ${message}`,
    };

    try {
        // Send the email using Brevo API
        const emailResponse = await fetch(
            "https://api.brevo.com/v3/smtp/email",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": process.env.BREVO_API_KEY, // Brevo API key
                    "content-type": "application/json",
                },
                body: JSON.stringify(emailData), // Stringify email data
            },
        );

        const emailResponseData = await emailResponse.json(); // Parse response
        console.log("Email Response Data:", emailResponseData); // Log for debugging

        if (emailResponse.ok) {
            console.log("Email sent successfully:", emailResponseData);
            return NextResponse.json(
                { message: "Email sent successfully!" },
                { status: 200 },
            );
        } else {
            console.error("Error sending email:", emailResponseData);
            return NextResponse.json(
                {
                    error:
                        "Error sending email. " +
                        (emailResponseData.message || "Unknown error."),
                },
                { status: 500 },
            );
        }
    } catch (error) {
        console.error("Error in email process:", error);
        return NextResponse.json(
            { error: "Error processing your request." },
            { status: 500 },
        );
    }
}
