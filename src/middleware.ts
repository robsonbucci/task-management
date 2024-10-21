import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export async function middleware(req: Request) {
  const token = getCookie("authorization", { req });

  if (!token) {
    return NextResponse.redirect(
      new URL("/login?error=missing_token", req.url)
    );
  }

  const response = await fetch(new URL("/api/auth/validateToken", req.url), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const { valid } = await response.json();

  if (valid) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login?error=invalid_token", req.url));

}

export const config = {
  matcher: ["/"],
};
