"use server";

import { getClient } from "@/lib/Connection";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

export async function POST(request) {
  const client = await getClient();

  try {
    const body = await request.json();
    const { f_name, last_name, mobile_no, email, password, accepted } = body;

    if (
      !email ||
      !password ||
      !f_name ||
      !last_name ||
      !mobile_no ||
      !accepted
    ) {
      return NextResponse.json(
        { error: "Request body is missing" },
        { status: 400 }
      );
    }

    const pass = await hashPassword(password);
    const token = jwt.sign({ email: atob(email) }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    const result = await client.query(`
    INSERT INTO "Client" (email, password, "createdAt", "firstName", "isVerified", "lastName", "mobileNo", "termsAndConditions", "updatedAt", last_login, token) VALUES ('${atob(
      email
    )}','${pass}',DEFAULT,'${f_name}',false,'${last_name}','${mobile_no}','${accepted}',DEFAULT,DEFAULT,'${token}');`);

    
    return NextResponse.json({ message: "Success", token: token });
  } catch (e) {
    return NextResponse.json(
      { error: "Request body is missing" },
      { status: 400 }
    );
  } finally {
    client.end();
  }
}

// data format is:
// {
//     "f_name": "Test",
//     "last_name": "Last",
//     "mobile_no": 53542432145,
//     "email": "YUBhLmNvbQ==",
//     "password": "1234567",
//     "accepted": true
// }
