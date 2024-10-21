import { loginUser } from "@/services/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await loginUser(body);
    return Response.json(user, { status: 200 });
  } catch (error) {
    const handleredError = error as Error & { status?: number };
    return Response.json({
      status: handleredError.status || 500,
      message: handleredError.message,
    });
  }
}
