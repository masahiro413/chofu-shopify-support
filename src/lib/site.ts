// サイト全体で使う基本情報。公開するドメインが決まったら SITE_URL を書き換えてください。
// 公開URL。独自ドメインを使うときは NEXT_PUBLIC_SITE_URL を設定。
// 未設定ならVercelの本番URL（例: chofu-shopify-support.vercel.app）を自動で使う。
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://example.com");

export const SITE_NAME = "調布Shopifyサポート";
export const OWNER_NAME = "鹿野将広";
export const AREA = "東京都調布市";
export const CONTACT_EMAIL = "chofu.shopify.support@gmail.com";

export const SITE_TITLE = `${SITE_NAME}｜Shopifyの構築・移行・運用（${AREA}）`;
export const SITE_DESCRIPTION =
  "調布を拠点に、個人店や小さなブランドのShopifyづくりをお手伝いしています。新規構築、BASE・カラーミー・WordPressからの移行、公開後の更新まで。まずは無料のショップ診断で、改善点を3つお送りします。";

// 無料診断の申し込みメール（件名と本文のひな形つき）
export const DIAGNOSIS_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "無料ショップ診断の希望",
)}&body=${encodeURIComponent(
  "お店（またはSNS）のURL：\nお名前：\n気になっていること（任意）：\n",
)}`;

export const GITHUB_URL = "https://github.com/masahiro413";
export const LINE_URL = "https://lin.ee/7KMHHYB";
export const LINE_ID = "@827bzpuz";
