import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      take: 1,
    });

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("DB TEST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}