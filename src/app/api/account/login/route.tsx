"use server";
import { PrismaClient } from "@prisma/client/edge";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();

  try {
    let email: string | any = req.headers.get("user");
    if (!email) {
      return NextResponse.json(
        { error: "User header is missing" },
        { status: 400 }
      );
    }

    const user = await prisma.client.findUnique({
      where: {
        email: atob(email),
      },
    });

    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
