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

    // 1️⃣ Admin notification email to Intellilink
    await resend.emails.send({
      from: "Intellilink Website <info@intellilink.media>",
      to: ["info@intellilink.media"],
      replyTo: email,
      subject: `New Pilot Request – Intellilink Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #07132b; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Pilot Request</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0;">Submitted via intellilink.media</p>
          </div>

          <div style="border: 1px solid #e2e8f0; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 130px;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 14px; color: #1a1a1a;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Organization</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 14px; color: #1a1a1a;">${organization}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <a href="mailto:${email}" style="font-size: 14px; color: #2563eb;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; vertical-align: top;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message</span>
                </td>
                <td style="padding: 10px 0;">
                  <p style="font-size: 14px; color: #1a1a1a; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</p>
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 14px 18px; background: #f8fafc; border-left: 3px solid #07132b; border-radius: 4px;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Reply directly to this email to respond to ${name} at <strong>${email}</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // 2️⃣ Confirmation email to the person who submitted the form
    await resend.emails.send({
      from: "Intellilink Media <info@intellilink.media>",
      to: [email],
      subject: "We received your pilot request — Intellilink Media",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #07132b; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">Intellilink Media</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0;">Intellilink Gateway™ — Governance Layer for Enterprise Satellite Connectivity</p>
          </div>

          <div style="border: 1px solid #e2e8f0; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
            <h2 style="font-size: 18px; color: #07132b; margin: 0 0 12px;">Thank you, ${name}</h2>
            <p style="font-size: 14px; color: #475569; line-height: 1.7; margin: 0 0 24px;">
              We have received your request for a pilot discussion with Intellilink Media.
              Our team will review your submission and reach out to you shortly.
            </p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
              <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 14px;">What happens next</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; vertical-align: top; width: 28px;">
                    <span style="display: inline-block; width: 20px; height: 20px; background: #07132b; color: #ffffff; border-radius: 50%; font-size: 11px; font-weight: 700; text-align: center; line-height: 20px;">1</span>
                  </td>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 13px; color: #334155; line-height: 1.5;">Our team reviews your request and prepares for an initial technical discussion.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <span style="display: inline-block; width: 20px; height: 20px; background: #07132b; color: #ffffff; border-radius: 50%; font-size: 11px; font-weight: 700; text-align: center; line-height: 20px;">2</span>
                  </td>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 13px; color: #334155; line-height: 1.5;">We will contact you within 24 hours to schedule a confidential pilot discussion.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <span style="display: inline-block; width: 20px; height: 20px; background: #07132b; color: #ffffff; border-radius: 50%; font-size: 11px; font-weight: 700; text-align: center; line-height: 20px;">3</span>
                  </td>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 13px; color: #334155; line-height: 1.5;">Together we define the pilot scope, environment, and success criteria.</p>
                  </td>
                </tr>
              </table>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin-bottom: 28px;">
              <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Your submission</p>
              <p style="font-size: 13px; color: #475569; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</p>
            </div>

            <p style="font-size: 14px; color: #475569; line-height: 1.7; margin: 0 0 4px;">Warm regards,</p>
            <p style="font-size: 14px; font-weight: 600; color: #07132b; margin: 0 0 2px;">The Intellilink Media Team</p>
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">info@intellilink.media &nbsp;·&nbsp; intellilink.media</p>
          </div>

          <p style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 16px;">
            This is an automated confirmation. Please do not reply to this email directly.
            To contact us, email <a href="mailto:info@intellilink.media" style="color: #64748b;">info@intellilink.media</a>
          </p>
        </div>
      `,
    });
    
    // Save to Google Sheets
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        console.log("Send data to Google Sheets...");
          name,
          organization,
          email,
          message,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
