import { getCookie, deleteCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = getCookie('authtoken', { req: request });
    let profileType = getCookie('UserProfile', { req: request });

     const em = getCookie('email', { req: request });

    // Log the current state of cookies and the requested path
    console.log('Request URL:', request.nextUrl.pathname);
    console.log('Token:', token);
    console.log('ProfileType:', profileType);
    console.log('em:', em);

    const protectedRoutes = ['/longterm/dashboard', '/dating/dashboard'];

    if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // If profileType is null or outdated, clear it and enforce redirection
        if (!profileType) {
            deleteCookie('UserProfile', { req: request });
            return NextResponse.redirect(new URL('/longterm/dashboard', request.url));
        }

        const { pathname } = request.nextUrl;

        if (pathname.startsWith('/longterm/dashboard') && profileType === 'dating') {
            return NextResponse.redirect(new URL('/dating/dashboard', request.url));
        }

        if (pathname.startsWith('/dating/dashboard') && profileType === 'marriage') {
            return NextResponse.redirect(new URL('/longterm/dashboard', request.url));
        }
    }

    return NextResponse.next();
}
