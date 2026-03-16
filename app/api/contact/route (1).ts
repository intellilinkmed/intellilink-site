import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, organization, email, message } = body;

  if (!name || !organization || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "info@intellilink.media",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Intellilink Website" <info@intellilink.media>`,
    to: "info@intellilink.media",
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

  return NextResponse.json({ success: true });
}
