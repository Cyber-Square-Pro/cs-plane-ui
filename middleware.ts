  import { NextRequest, NextResponse } from 'next/server';
  import { parse } from 'cookie';

  export function middleware(request: NextRequest) {
      const cookieHeader = request.headers.get('Cookie');
      const cookies = parse(cookieHeader || '');
      const accessToken = cookies.accessToken;

      console.log(request.nextUrl,'urlll', request.url)
      if (!accessToken) {
          console.log('No access token found');
          if (request.url.startsWith('/api')) {
              return NextResponse.redirect(new URL('/', request.url));  
          }
      }

      
      console.log(request.nextUrl,'urlll', request.url)
      if (request.url.startsWith('/api')) {
          console.log('API request intercepted:', request.url);

          const authToken = request.headers.get('Authorization');
          console.log('Authorization header:', authToken);

        

          return NextResponse.next();  
      }

  
      return NextResponse.next();
  }

export const config = {
  matcher: [
    '/onboarding'
  ]
}



