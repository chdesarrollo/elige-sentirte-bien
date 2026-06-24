import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, token } = await req.json();

  await prisma.verification.create({
    data: {
      id: crypto.randomUUID(),
      identifier: email,
      value: token,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1 hora
    },
  });

  return NextResponse.json({ ok: true });
}