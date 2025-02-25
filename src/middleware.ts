import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname.startsWith("/admin") || pathname === "/") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  if (token.role === "Admin" && pathname === "/") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (token.role === "User" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/"],
};