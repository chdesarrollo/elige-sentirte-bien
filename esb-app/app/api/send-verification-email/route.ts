import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { VerificationEmail } from "@/components/emails/verification-email";

export async function POST(req: Request) {
  try {
    const { email, name, verificationUrl } = await req.json();

    await resend.emails.send({
      from: "Elige Sentirte Bien <onboarding@resend.dev>",
      to: email,
      subject: "Confirma tu correo electrónico",
      html: VerificationEmail({
        name,
        verificationUrl,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    );
  }
}
