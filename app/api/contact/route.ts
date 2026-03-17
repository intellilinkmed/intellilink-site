import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organization, email, message } = body;

    if (!name || !organization || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 1️⃣ Notification email to Intellilink
    await resend.emails.send({
      from: "Intellilink Website <onboarding@resend.dev>",
      to: ["info@intellilink.media"],
      replyTo: email,
      subject: `New Pilot Request from ${name} — ${organization}`,
      html: `
        <h2>New Pilot Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // 2️⃣ Auto-reply to the person who submitted the form
    await resend.emails.send({
      from: "Intellilink Media <onboarding@resend.dev>",
      to: ["mukwesaemmanuel@gmail.com"],
      subject: "We received your pilot request",
      html: `
        <h2>Thank you, ${name}</h2>
        <p>We have received your request for a pilot discussion.</p>
        <p>Our team will review your message and get back to you within 24 hours.</p>
        <hr />
        <p><strong>Your submission:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <br />
        <p>— Intellilink Media Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
