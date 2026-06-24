import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    const ip =
        req.headers.get("x-forwarded-for") ||
        "anonymous";

    if (!rateLimit(ip)) {
        return NextResponse.json(
            { error: "Too many requests" },
            { status: 429 }
        );
    }

    const { name, email, message } = await req.json();

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "rafaelsaraivawork@gmail.com",
            subject: `New message from ${name}`,
            html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Failed" },
            { status: 500 }
        );
    }
}