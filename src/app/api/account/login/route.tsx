"use server";
import { getClient } from "@/lib/Connection";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const client = await getClient();

  try {
    let email: string | any = req.headers.get("user");
    if (!email) {
      return NextResponse.json(
        { error: "User header is missing" },
        { status: 400 }
      );
    }

    const sqlQuery = `
    SELECT * FROM "Client";
    `;

    const result = await client.query(sqlQuery);

    await client.end();

    return NextResponse.json({ clients: result.rows });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
