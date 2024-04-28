import { parse } from 'cookie';

export function getHeaders(request: Request) {

  const cookieHeader = request.headers.get('Cookie');
  const cookies = parse(cookieHeader || '');
  const accessToken = cookies.accessToken;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-type": "application/json",
  };

  return headers;

}

