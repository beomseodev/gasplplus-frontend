import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import gasplplusLogo from "../gasplplus_logo.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2026-04-21 콘텐츠 한국어 톤 통일: 검색·미리보기용 사이트 설명을 한국어로 정리함.
export const metadata: Metadata = {
  title: "GASPLPLUS",
  description:
    "임베디드 하드웨어·소프트웨어 엔지니어링 기업 GASPLPLUS 공식 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="siteHeader">
          <div className="siteHeaderInner">
            <Link className="siteBrand" href="/" aria-label="GASPLPLUS 홈">
              <Image
                className="siteBrandImage"
                src={gasplplusLogo}
                alt="GASPLPLUS"
                priority
              />
            </Link>
            <nav className="siteNav" aria-label="주요 메뉴">
              <Link href="/about">회사 소개</Link>
              <Link href="/work">하는 일</Link>
              <Link href="/location">오시는 길</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
