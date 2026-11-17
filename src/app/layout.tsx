import type { Metadata } from "next";
import { BIZ_UDPGothic, Klee_One } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

// 本文用。ユニバーサルデザイン書体で、年配の方にも読みやすい
const bizUd = BIZ_UDPGothic({
  variable: "--font-biz-ud",
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: false,
});

// 診断票の書き込みだけに使うペン字風の書体
const klee = Klee_One({
  variable: "--font-klee",
  weight: ["400", "600"],
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Shopify",
    "Shopify 構築",
    "Shopify 移行",
    "ネットショップ制作",
    "調布",
    "世田谷",
    "川崎",
    "BASE 移行",
    "カラーミーショップ 移行",
    "WordPress セキュリティ",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${bizUd.variable} ${klee.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
