import { getHeaders } from '@/lib/headers/headers';
import { parse } from 'cookie';
import { NextResponse } from 'next/server';
 

export async function GET(request: Request) {
  
    const {searchParams} = new URL(request.url);
    const slug = searchParams.get("slug");

    const headers = getHeaders(request)
    
    const apiReponse = await fetch(`http://localhost:8000/api/workspaces/slug-check?slug=${searchParams}/`,
        {
            method: "GET",
            headers: headers,
            credentials: "include",
        }
    )

    const res = await apiReponse.json()

    return NextResponse.json(res)
}

