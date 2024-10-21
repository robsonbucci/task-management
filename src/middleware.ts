import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(req: Request) {
  const token = getCookie("authorization", { req });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
