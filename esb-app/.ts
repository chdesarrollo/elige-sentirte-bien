import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  const isCourseRoute = req.nextUrl.pathname.startsWith(
    "/dashboard/course"
  );

  if (isCourseRoute && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/course/:path*"],
};