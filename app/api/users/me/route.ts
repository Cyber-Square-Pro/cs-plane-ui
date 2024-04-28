import { getHeaders } from '@/lib/headers/headers';

import { parse } from 'cookie';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const headers = getHeaders(request)
    const apiReponse = await fetch('http://localhost:8000/api/users/me/',
        {
            method: "GET",
            headers: headers,
            credentials: "include",
        }
    )

    const res = await apiReponse.json()
    

   

        return NextResponse.json(res)
    }

    export async function PATCH(request: Request) {


        const cookieHeader = request.headers.get('Cookie');
        const cookies = parse(cookieHeader || '');
        const accessToken = cookies.accessToken;
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
        };
        const requestBody = await request.json?.();
        const apiReponse = await fetch('http://localhost:8000/api/users/me/',
            {
                method: "PATCH",
                headers: headers,
                credentials: "include",
                body: JSON.stringify(requestBody)
            }
        )

        const res = await apiReponse.json()
        


        return NextResponse.json(res)
    }
