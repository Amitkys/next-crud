
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Get the current URL path
  const { pathname } = req.nextUrl;

  // Define protected routes
  const protectedRoutes = ['/kys'];

  // Check if the user is trying to access a protected route
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // Get the token from the request
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If there's no valid token, redirect the user to the login page
    if (!token) {
      const loginUrl = new URL('/api/auth/signin', req.url);
      return NextResponse.redirect(loginUrl);
    }

  }

  // If the user is authenticated or accessing a non-protected route, continue
  return NextResponse.next();
}

// Specify which paths to run the middleware on (optional)
export const config = {
  matcher: ['/kys/:path*'], // Apply middleware to /dashboard and its subroutes
};
