"use server";

import { getClient } from "@/lib/Connection";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

export async function POST(request) {
  const client = await getClient(
    `${process.env.DATABASE_URL_1}${process.env.DATABASE_ACCOUNT_USER}${process.env.DATABASE_URL_2}`
  );
  try {
    const body = await request.json();
    const { userotp, password_reset_token, password } = body;
    console.log(userotp, password_reset_token, password);
    if (!userotp) {
      return NextResponse.json({
        status: 400,
        body: { error: "OTP is missing" },
      });
    }

    if (!password_reset_token) {
      return NextResponse.json({
        status: 400,
        body: { error: "Do Password reset from the same browser" },
      });
    }

    if (!password) {
      return NextResponse.json({
        status: 400,
        body: { error: "Password is missing" },
      });
    }

    const result = await client.query(
      `SELECT * FROM "password_reset" WHERE password_reset_token = '${password_reset_token}';`
    );

    if (result.rows.length === 0) {
      return NextResponse.json({
        status: 400,
        body: { error: "Invalid Password Reset Token" },
      });
    }

    const { otp, updated_at } = result.rows[0];

    console.log(otp);

    if (userotp !== otp) {
      return NextResponse.json({
        status: 400,
        body: { error: "OTP is incorrect" },
      });
    }

    const currentTime = new Date();
    const istTimestamp = updated_at.getTime() + 5.5 * 60 * 60 * 1000;
    const istDate = new Date(istTimestamp);

    const timeDifference = currentTime.getTime() - istDate.getTime();

    if (timeDifference > 600000) {
      return NextResponse.json({
        status: 400,
        body: { error: "OTP is expired" },
      });
    }

    if (result.rows[0].success === true) {
      return NextResponse.json({
        status: 400,
        body: { error: "Password already reset Using This OTP" },
      });
    }

    await client.query(
      `UPDATE password_reset SET success = true,updated_at = DEFAULT WHERE password_reset_token = '${password_reset_token}';`
    );

    const pass = await hashPassword(password);
    await client.query(
      `UPDATE "Client" SET "password" = $1, "updatedAt" = DEFAULT WHERE email = (SELECT email FROM "password_reset" WHERE password_reset_token = $2);`,
      [pass, password_reset_token]
    );

    return NextResponse.json({
      status: 200,
      body: { status: "success", message: "OTP is correct" },
    });
  } catch (error) {
    return NextResponse.json({ status: 500, body: { error: error.message } });
  } finally {
    client.end();
  }
}

// post format for password reset verify
//
// {
// "password_reset_token": "******************************",
// "userotp":400254
// "password":"*********"
// }
