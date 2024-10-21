import { NextResponse } from "next/server";

export async function POST(req) {
    const { email } = await req.json(); // Collect email from request body

    // Generate a unique FIRSTNAME using the current date and time
    const now = new Date();
    const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now
        .getHours()
        .toString()
        .padStart(2, "0")}${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;
    const firstName = `Waitlist_${timestamp}`;

    // Prepare the email template payload for Brevo API
    const emailData = {
        sender: {
            email: "waitlist@risingrootsfoundation.org", // Set your Brevo sender email
            name: "Waitlist - Rising Roots Foundation", // Set sender name
        },
        subject: "You’re on our Waitlist!", // Set subject
        templateId: 1, // Your predefined template ID
        params: {
            greeting: "You’re on our Waitlist!", // Greeting
        },
        messageVersions: [
            {
                to: [
                    {
                        email: email, // The email collected from the subscription form
                        name: "User", // Placeholder name, can be left static
                    },
                ],
                params: {
                    greeting: "You’re on our Waitlist!", // Greeting
                },
                subject: "You’re on our Waitlist!", // Subject for the email
            },
        ],
    };

    // Prepare the contact creation payload for Brevo API
    const contactData = {
        attributes: {
            FIRSTNAME: firstName, // Set FIRSTNAME with incrementing timestamp
        },
        updateEnabled: false, // Avoid updating existing contact
        email: email, // Email collected from the form
        listIds: [5], // Add contact to the list with ID 5
    };

    try {
        // Create the contact in Brevo
        const contactResponse = await fetch(
            "https://api.brevo.com/v3/contacts",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": process.env.BREVO_API_KEY, // Use your Brevo API key stored in environment variable
                    "content-type": "application/json",
                },
                body: JSON.stringify(contactData),
            },
        );

        const contactResponseData = await contactResponse.json(); // Parse the response body
        if (!contactResponse.ok) {
            console.error("Error creating contact:", contactResponseData);

            // Handle specific error for duplicate contact
            if (
                contactResponseData.code === "duplicate_parameter" &&
                contactResponseData.message.includes("Contact already exist")
            ) {
                return NextResponse.json(
                    {
                        error: "Contact already exists. Please use a different email address.",
                    },
                    { status: 400 },
                );
            }

            return NextResponse.json(
                { error: "Error creating contact." },
                { status: 500 },
            );
        }

        // If contact creation is successful, proceed to send the waitlist email
        const emailResponse = await fetch(
            "https://api.brevo.com/v3/smtp/email",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": process.env.BREVO_API_KEY, // Use your Brevo API key stored in environment variable
                    "content-type": "application/json",
                },
                body: JSON.stringify(emailData),
            },
        );

        const emailResponseData = await emailResponse.json(); // Parse the response body
        if (emailResponse.ok) {
            console.log("Email sent successfully:", emailResponseData);
            return NextResponse.json(
                { message: "Subscription successful!" },
                { status: 200 },
            );
        } else {
            console.error("Error sending email:", emailResponseData);
            return NextResponse.json(
                { error: "Error sending email." },
                { status: 500 },
            );
        }
    } catch (error) {
        console.error("Error in email/contact process:", error);
        return NextResponse.json(
            { error: "Error processing subscription." },
            { status: 500 },
        );
    }
}
