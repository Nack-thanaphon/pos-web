// filepath: /Users/dev_nack/Desktop/ppc-web/src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import UAParser from 'ua-parser-js';

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const parser = new UAParser(ua);
  const deviceType = parser.getDevice().type;

  // if (deviceType === 'mobile') {
  //   console.log('Redirecting to mobile');
  //   return NextResponse.rewrite(new URL('/(front)/(mobile)', request.url));
  // } else {
  //   console.log('Redirecting to client');
  return NextResponse.rewrite(new URL('/', request.url));
  // }
}

export const config = {
  matcher: ['/'],
};