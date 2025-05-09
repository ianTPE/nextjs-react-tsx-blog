import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/blog.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 獲取基本 URL
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

// 網站基本 metadata
export const metadata: Metadata = {
  title: "我的純 React + TypeScript 部落格",
  description: "使用 React + TypeScript 構建的現代化部落格",
  // 基本 Open Graph 標籤
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: baseUrl,
    siteName: '我的純 React + TypeScript 部落格',
    title: '我的純 React + TypeScript 部落格',
    description: '使用 React + TypeScript 構建的現代化部落格',
    images: [
      {
        url: `${baseUrl}/images/default-og-image.png`,
        width: 1200,
        height: 630,
        alt: '我的純 React + TypeScript 部落格',
      },
    ],
  },
  // Twitter 卡片標籤
  twitter: {
    card: 'summary_large_image',
    title: '我的純 React + TypeScript 部落格',
    description: '使用 React + TypeScript 構建的現代化部落格',
    images: [`${baseUrl}/images/default-og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <script src="/js/progress-bar.js" defer></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="site-wrapper">
          <Header />
          <main className="site-main">
            <div className="container">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
