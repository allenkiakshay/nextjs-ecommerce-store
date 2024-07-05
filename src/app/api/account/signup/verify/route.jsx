"use server";

import { getClient } from "@/lib/Connection";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req) {
  const client = await getClient();
  try {
    const parsedUrl = parse(req.url, true);
    const token = parsedUrl.query.token;

    if (!token) {
      return NextResponse.json(
        { message: "Token not provided" },
        { status: 400 }
      );
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      return NextResponse.json(
        { message: "Invalid JWT token format" },
        { status: 400 }
      );
    }

    const decodedToken = JSON.parse(atob(parts[1]));
    const email = decodedToken.email;

    if (!email) {
      return NextResponse.json(
        { message: "Invalid JWT token: email not found" },
        { status: 400 }
      );
    }

    const result = await client.query(
      `UPDATE "Client" SET "isVerified" = true WHERE email = $1 AND token = $2`,
      [email, token]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Invalid Verification Link" },
        { status: 400 }
      );
    }

    return NextResponse.redirect(
      `${process.env.WEBSITE_URL}/signup/verified`
    );
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  } finally {
    client.end();
  }
}
