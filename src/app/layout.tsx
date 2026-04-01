import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GASPLPLUS",
  description: "GASPLPLUS company website",
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
            <Link className="siteBrand" href="/">
              GASPLPLUS
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
