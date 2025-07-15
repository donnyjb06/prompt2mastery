import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies"

const authRoutes = ["/login", "register"]

export async function middleware(req: NextRequest) {
  const {nextUrl} = req;

  const sessionCookie = getSessionCookie(req)

  const res = NextResponse.next()

  const isLoggedIn = !!sessionCookie;

  if (nextUrl.pathname.startsWith("/dashboard") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url))
  }
  const isOnAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isOnAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/exercises", req.url))
  }

  return res
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}