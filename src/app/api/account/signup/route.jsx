"use server";

import { getClient } from "@/lib/Connection";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createClient } from "@/lib/Schema";
import { sendEmail } from "@/lib/SendVerifyEmail";

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

function generateVerificationEmailText(username, verificationLink) {
  const body = `
    Dear ${username},

    Thank you for registering with our service. To complete your registration, please verify your email address by clicking the link below:

    ${verificationLink}

    If you did not create an account with us, please ignore this email.

    Thank you,
    Mahesh Mens Touch
  `;

  return { body };
}

export async function POST(request) {
  const client = await getClient(
    `${process.env.DATABASE_URL_1}${process.env.DATABASE_ACCOUNT_USER}${process.env.DATABASE_URL_2}`
  );
  let isexist;

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

    isexist = await client.query(
      `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'Client';`
    );

    if (isexist.rows.length === 0) {
      createClient(client);
    }

    const pass = await hashPassword(password);
    const token = jwt.sign({ email: atob(email) }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    await client.query(`
    INSERT INTO "Client" (email, password, "createdAt", "firstName", "isVerified", "lastName", "mobileNo", "termsAndConditions", "updatedAt", last_login, token) VALUES ('${atob(
      email
    )}','${pass}',DEFAULT,'${f_name}',false,'${last_name}','${mobile_no}','${accepted}',DEFAULT,DEFAULT,'${token}');`);

    const verificationLink = `${process.env.WEBSITE_URL}api/account/signup/verify?token=${token}`;

    sendEmail(
      atob(email),
      "Verify your email address",
      generateVerificationEmailText(f_name, verificationLink).body
    );

    return NextResponse.json({
      status_message: "Success",
      message: "Please check your email to verify your account",
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
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
