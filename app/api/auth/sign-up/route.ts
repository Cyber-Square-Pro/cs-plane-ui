import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    const requestBody = await request.json?.();

    const response = await fetch("http://localhost:8000/api/sign-up/", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });

    const { message, statusCode, token } = await response.json();

    if (statusCode == 201) {

        const cookie = `token=${token}; Path=/; HttpOnly`;

        return NextResponse.json({
            message, statusCode, token
        },
            {
                headers: { "Set-Cookie": cookie }
            });

    }

    return NextResponse.json({ message, statusCode });
}