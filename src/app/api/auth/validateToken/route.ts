import { NextResponse } from "next/server";
import { validateToken } from "@/services/auth";

export async function POST(request: Request) {
  const { token } = await request.json();

  const validToken = validateToken(token);
  
  if (validToken) {
    return NextResponse.json({ valid: true });
  }
  
  return NextResponse.json({ valid: false }, { status: 401 });
}