"use server";

import { getClient } from "@/lib/Connection";
import { sendEmail } from "@/lib/SendVerifyEmail";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

function generateotptext(username, otp) {
  const body = `
      Dear ${username},
  
      To complete your password reset, this is the otp code:
  
      ${otp}

      This OTP is valid for 10 minutes. If you did not request a password reset, please ignore this email.
  
      Thank you,
      Mahesh Mens Touch
    `;

  return { body };
}

function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

export async function POST(request) {
  const client = await getClient(
    `${process.env.DATABASE_URL_1}${process.env.DATABASE_ACCOUNT_USER}${process.env.DATABASE_URL_2}`
  );
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "User Data is missing" },
        { status: 400 }
      );
    }

    const result = await client.query(
      `SELECT EXISTS (SELECT 1 FROM "Client" WHERE email = '${atob(email)}');`
    );

    if (result.rows[0].exists === false) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ email: atob(email) }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    const otp = generateOTP();

    const otpText = generateotptext(atob(email), otp);
    sendEmail(atob(email), "Password Reset OTP", otpText.body);

    await client.query(
      `INSERT INTO password_reset (email, otp, password_reset_token,created_at,updated_at,success) VALUES ('${atob(
        email
      )}', ${otp}, '${token}',DEFAULT,DEFAULT,false)`
    );

    return NextResponse.json(
      { message: "Success", password_reset_token: token },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    client.end();
  }
}


// post format for password reset
// 
// {
    // "email": "YWxsZW5raWFrc2hheTgzMjJAZ21haWwuY29t"
// }