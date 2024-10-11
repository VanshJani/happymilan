import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = getCookie('authtoken', { req: request });
    const profileType = getCookie('UserProfile', { req: request });

    const protectedRoutes = ['/longterm/dashboard', '/dating/dashboard'];

    // Set no-store cache control to prevent caching of pages
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        const { pathname } = request.nextUrl;

        // Handle profileType redirection based on user type
        if (pathname.startsWith('/longterm/dashboard') && profileType === 'dating') {
            return NextResponse.redirect(new URL('/dating/dashboard', request.url));
        }

        if (pathname.startsWith('/dating/dashboard') && profileType === 'marriage') {
            return NextResponse.redirect(new URL('/longterm/dashboard', request.url));
        }
    }

    return response;
}
