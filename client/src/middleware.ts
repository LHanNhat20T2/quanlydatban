import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/manage"];
const unAuthPaths = ["/login"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isAuth = request.cookies.get("accessToken")?.value;
    // Chưa loogin thì k cho vào private paths
    if (privatePaths.some((path) => pathname.startsWith(path)) && !isAuth) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Login roi thì k cho vào login nữa
    if (unAuthPaths.some((path) => pathname.startsWith(path)) && isAuth) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/manage/:path*", "/login"],
};
