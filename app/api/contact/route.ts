import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get environment variables
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    const sendGridEmailTo = process.env.SENDGRID_EMAIL_TO;
    const sendGridEmailFrom = process.env.SENDGRID_EMAIL_FROM || sendGridEmailTo;

    console.log("SendGrid Config Check:", {
      hasApiKey: !!sendGridApiKey,
      apiKeyPrefix: sendGridApiKey?.substring(0, 3),
      emailTo: sendGridEmailTo,
      emailFrom: sendGridEmailFrom,
    });

    if (!sendGridApiKey || !sendGridEmailTo) {
      console.error("Missing SendGrid API configuration");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailSubject = `Portfolio Contact: Message from ${name}`;
    const emailBody = `
New message from portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the portfolio contact form.
    `.trim();

    // Prepare SendGrid request payload
    const sendGridPayload = {
      personalizations: [
        {
          to: [{ email: sendGridEmailTo }],
          subject: emailSubject,
        },
      ],
      from: { email: sendGridEmailFrom, name: "Portfolio Contact Form" },
      reply_to: { email: email, name: name },
      content: [
        {
          type: "text/plain",
          value: emailBody,
        },
      ],
    };

    console.log("Sending email via SendGrid:", {
      to: sendGridEmailTo,
      from: sendGridEmailFrom,
      subject: emailSubject,
    });

    // Send email via SendGrid API
    const sendGridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sendGridApiKey}`,
      },
      body: JSON.stringify(sendGridPayload),
    });

    if (!sendGridResponse.ok) {
      const errorData = await sendGridResponse.text();
      console.error("SendGrid API error:", errorData);
      console.error("SendGrid response status:", sendGridResponse.status);
      
      // Try to parse error message for better user feedback
      let errorMessage = "Failed to send email";
      try {
        const errorJson = JSON.parse(errorData);
        if (errorJson.errors && errorJson.errors.length > 0) {
          errorMessage = errorJson.errors[0].message || errorMessage;
        }
      } catch (e) {
        // If parsing fails, use the raw error data
        errorMessage = errorData || errorMessage;
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

