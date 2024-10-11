import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = getCookie('authtoken', { req: request });
    const profileType = getCookie('UserProfile', { req: request });

    // Log the current state of cookies and the requested path
    console.log('Request URL:', request.nextUrl.pathname);
    console.log('Token:', token);
    console.log('ProfileType:', profileType);

    // Define protected routes
    const protectedRoutes = ['/longterm/dashboard', '/dating/dashboard'];

    // Set no-store cache control to prevent caching of pages
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    // Check if the request is for a protected route
    if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            console.log('No token, redirecting to /login');
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // Handle profile type redirection
        const { pathname } = request.nextUrl;

        if (pathname.startsWith('/longterm/dashboard') && profileType === 'dating') {
            console.log('Redirecting to /dating/dashboard because profileType is dating');
            return NextResponse.redirect(new URL('/dating/dashboard', request.url));
        }

        if (pathname.startsWith('/dating/dashboard') && profileType === 'marriage') {
            console.log('Redirecting to /longterm/dashboard because profileType is marriage');
            return NextResponse.redirect(new URL('/longterm/dashboard', request.url));
        }
    }

    return response;
}

// Optional: Configure the matcher to only apply the middleware to certain paths
export const config = {
    matcher: ['/longterm/dashboard/:path*', '/dating/dashboard/:path*'], // Specify which paths to protect
};
