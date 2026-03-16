import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, organization, email, message } = body;

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
    subject: "New Pilot Request",
    html: `
      <h2>New Pilot Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
