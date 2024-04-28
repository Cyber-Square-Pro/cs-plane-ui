import { getHeaders } from '@/lib/headers/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

     const headers = getHeaders(request)

    const apiReponse = await fetch('http://localhost:8000/api/users/email/',
        {
            method: "POST",
            headers: headers,
            credentials: "include",
        }
    )

    const res = await apiReponse.json()
    return NextResponse.json(res)
}