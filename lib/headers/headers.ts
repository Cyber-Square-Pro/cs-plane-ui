import { parse } from 'cookie';

export function getHeaders(request: Request) {

  const cookieHeader = request.headers.get('Cookie');
  const cookies = parse(cookieHeader || '');
  const token = cookies.accessToken;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };
  return headers;

}

