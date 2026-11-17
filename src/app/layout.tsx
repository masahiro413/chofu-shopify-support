import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

// 文字は端末のシステム書体を使う（iPhone・MacならSFとヒラギノ）。Webフォントは読み込まない
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
  verification: {
    google: ["cCzvGd9Z1ou8DabvW7ycL-UGEo_ks7UVZhW3i4rVEq4", "pDIJJCiGfCZDbTeiHIKic924vBh-LcbYKxxW6O8gPKc"],
  },
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

export const viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
