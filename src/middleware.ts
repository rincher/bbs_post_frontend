import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // /api로 시작하는 모든 요청을 프록시
  if (request.nextUrl.pathname.startsWith("/api")) {
    const apiUrl = process.env.API_URL || "http://localhost:8080";

    // 새로운 URL 생성
    const url = new URL(request.nextUrl.pathname, apiUrl);
    url.search = request.nextUrl.search;

    // 백엔드로 리다이렉트
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
