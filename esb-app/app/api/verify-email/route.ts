import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    console.log("TOKEN:", token);

    if (!token) {
      return NextResponse.json(
        { error: "Token missing" },
        { status: 400 }
      );
    }

    const record = await prisma.verification.findFirst({
      where: {
        value: token,
      },
    });

    console.log("RECORD:", record);

    if (!record) {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: {
        email: record.identifier,
      },
      data: {
        emailVerified: true,
      },
    });

    console.log(
      "USER VERIFIED:",
      record.identifier
    );

    return NextResponse.redirect(
      new URL("/login", req.url)
    );

  } catch (error) {
    console.error("VERIFY EMAIL ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}