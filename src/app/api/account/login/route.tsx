import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query: any = req;
  return NextResponse.json({ message: "Hello World" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ message: "User logged in successfully" });
}
