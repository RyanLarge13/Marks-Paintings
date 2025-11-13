// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const user = req.cookies.get("user");

  // Redirect to login if no user
  if (!user) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Apply middleware only to certain routes
export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
