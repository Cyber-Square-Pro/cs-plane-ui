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

    const { message, statusCode, accessToken, refreshToken } = await response.json();
    if (statusCode == 201) {

        const cookieHeaderValue = `accessToken=${accessToken}; Path=/; HttpOnly`; // Set your cookie options as needed
        console.log(cookieHeaderValue,'iiii')
        return NextResponse.json({
            message, statusCode, accessToken, refreshToken
        },
        { 
            headers: { "Set-Cookie": cookieHeaderValue } 
        });

    }

        return NextResponse.json({ message, statusCode });
}