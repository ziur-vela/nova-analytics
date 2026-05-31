import { NextRequest, NextResponse } from "next/server";
import { updateWebsite } from "@/queries/prisma/website";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const adminToken = process.env.NOVA_ADMIN_TOKEN;
    if (!adminToken) {
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${adminToken}`,
      },
      body: JSON.stringify({
        username: email,
        password: password,
        role: "user",
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return NextResponse.json({ error: err.message || "Failed to create account." }, { status: response.status });
    }

    const newUser = await response.json();
    const userId = newUser.id;
    const websiteId = "3bcf5fec-19a0-4c93-b45f-d4d430c56943";

    try {
      await updateWebsite(websiteId, { userId });
    } catch {
      console.warn("Website assignment failed for new user:", userId);
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
