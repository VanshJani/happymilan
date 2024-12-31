import { getCookie, deleteCookie } from 'cookies-next'
import { NextResponse } from 'next/server'

export function middleware (request) {
  const token = getCookie('authtoken', { req: request })
  let profileType = getCookie('UserProfile', { req: request })

  const protectedRoutes = ['/longterm/dashboard', '/dating/dashboard']

  // Detect mobile user-agent
  const userAgent = request.headers.get('user-agent') || ''
  const isMobile = /Android|iPhone|iPad|iPod/i.test(userAgent)

  // Redirect to app store or play store when visiting /login from a mobile device
  if (pathname.startsWith('/login') && isMobile) {
    if (/Android/i.test(userAgent)) {
      return NextResponse.redirect(
        'https://play.google.com/store/apps?hl=en_IN'
      )
    }
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return NextResponse.redirect('https://apps.apple.com/us/app/example-app/')
    }
  }

  if (
    protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // If profileType is null or outdated, clear it and enforce redirection
    if (!profileType) {
      deleteCookie('UserProfile', { req: request })
      return NextResponse.redirect(new URL('/longterm/dashboard', request.url))
    }

    const { pathname } = request.nextUrl

    if (
      pathname.startsWith('/longterm/dashboard') &&
      profileType === 'dating'
    ) {
      return NextResponse.redirect(new URL('/dating/dashboard', request.url))
    }

    if (
      pathname.startsWith('/dating/dashboard') &&
      profileType === 'marriage'
    ) {
      return NextResponse.redirect(new URL('/longterm/dashboard', request.url))
    }
  }

  return NextResponse.next()
}
