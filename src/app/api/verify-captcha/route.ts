import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json(
      { success: false, message: "No token provided" },
      { status: 400 }
    );
  }

  const secretKey = process.env.NEXT_PUBLIC_SECRETKEY;

  // Verify with Google
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  const googleRes = await fetch(verifyUrl, { method: "POST" });
  const data = await googleRes.json();

  return NextResponse.json({ success: data.success });
}
