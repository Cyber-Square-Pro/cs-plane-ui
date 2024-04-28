import { getHeaders } from '@/lib/headers/headers';
import { parse } from 'cookie';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const headers = getHeaders(request)
    const requestBody = await request.json?.();
    console.log('re', requestBody)
    const apiReponse = await fetch('http://localhost:8000/api/users/email/verify/',
        {
            method: "POST",
            headers: headers,
            credentials: "include",
            body: JSON.stringify(requestBody),
        }
    )

    const res = await apiReponse.json()
    return NextResponse.json(res)
}