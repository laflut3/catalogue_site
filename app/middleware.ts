import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    // Rediriger les utilisateurs non authentifiés de /User à /Sign
    if (!token && pathname === '/User') {
        const url = req.nextUrl.clone();
        url.pathname = '/Sign';
        return NextResponse.redirect(url);
    }

    // Rediriger les utilisateurs authentifiés de /Sign à /
    if (token && pathname === '/Sign') {
        const url = req.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/User', '/Sign'],
};
