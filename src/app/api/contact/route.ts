import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Server-side logging for development/deployment tracking
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);

    // If RESEND_API_KEY is configured in .env.local, dispatch email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL || "23bcs048@iiitdwd.ac.in",
            reply_to: email,
            subject: `[Portfolio Contact] ${subject} - from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });

        if (!resendResponse.ok) {
          console.error("Resend dispatch returned non-200:", await resendResponse.text());
        }
      } catch (emailErr) {
        console.error("Failed to dispatch email via Resend:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message was transmitted successfully! I will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing message." },
      { status: 500 }
    );
  }
}

