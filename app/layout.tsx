import type { Metadata } from "next";
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
  title: "울산 번영로 하늘채 라크뷰 공식 분양안내",
  description: "울산 남구 최고의 입지, 하늘채 라크뷰의 분양가 및 모델하우스 정보를 확인하세요",
  keywords: "울산번영로하늘채라크뷰, 울산 아파트 분양, 울산 하늘채, 번영로 라크뷰, 울산 남구 아파트",
  openGraph: {
    title: "울산 번영로 하늘채 라크뷰 공식 분양안내",
    description: "울산 남구 최고의 입지, 하늘채 라크뷰의 분양가 및 모델하우스 정보를 확인하세요",
    type: "website",
    locale: "ko_KR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
