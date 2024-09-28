// import { NextResponse } from 'next/server';
// import { getCookie } from 'cookies-next';

// export function middleware(request) {
//     const token = getCookie('authtoken', { req: request });

//     // Define your protected routes
//     const protectedRoutes = ['/longterm/dashboard']; // Add your protected routes here

//     // Check if the request is for a protected route
//     if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
//         if (!token) {
//             // If token is not present, redirect to the login page
//             return NextResponse.redirect(new URL('/login', request.url));
//         }
//     }

//     // Allow the request to proceed if the token is present
//     return NextResponse.next();
// }

// // Optional: Configure the matcher to only apply the middleware to certain paths
// export const config = {
//     matcher: ['/longterm/dashboard/:path*'], // Specify which paths to protect
// };

import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = getCookie('authtoken', { req: request });

    // Get the profile type from localStorage using request headers
    const profileType = getCookie("UserProfile", { req: request })

    // Define your protected routes
    const protectedRoutes = ['/longterm/dashboard', '/dating/dashboard'];

    // Check if the request is for a protected route
    if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            // If token is not present, redirect to the login page
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // Check for profile type and handle redirection
        const { pathname } = request.nextUrl;
        console.log("🚀 ~ middleware ~ pathname:", pathname)

        // If user with 'dating' profile type tries to access '/longterm/dashboard'
        if (pathname.startsWith('/longterm/dashboard') && profileType == 'dating') {
            return NextResponse.redirect(new URL('/dating/dashboard', request.url));
        }

        // If user with 'longterm' profile type tries to access '/dating/dashboard'
        if (pathname.startsWith('/dating/dashboard') && profileType == 'marriage') {
            return NextResponse.redirect(new URL('/longterm/dashboard', request.url));
        }
    }

    // Allow the request to proceed if the token is present and no redirection is needed
    return NextResponse.next();
}

// Optional: Configure the matcher to only apply the middleware to certain paths
export const config = {
    matcher: ['/longterm/dashboard/:path*', '/dating/dashboard/:path*'], // Specify which paths to protect
};
