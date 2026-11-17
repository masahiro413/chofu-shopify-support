# 調布Shopifyサポート LP

Next.js 16（App Router / Cache Components）で作った、調布Shopifyサポートの1ページLPです。

## 動かし方

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開くと確認できます。

公開用にビルドするとき：

```bash
npm run build
npm run start
```

## 公開前に変えるところ

- `src/lib/site.ts` の `SITE_URL`
  公開するドメイン（例：`https://chofushopifysupport.com`）に変えてください。
  環境変数 `NEXT_PUBLIC_SITE_URL` で上書きすることもできます。
  ここが canonical・OGP・robots.txt・sitemap.xml に使われます。
- 連絡先メールや屋号も `src/lib/site.ts` にまとめてあります。

## ファイルの場所

- `src/app/page.tsx`：LP本体（セクションの文章・料金・FAQはファイル上部の配列で編集できます）
- `src/app/layout.tsx`：タイトル・説明文などのメタデータとフォント
- `src/app/globals.css`：色（紙・藍・蛍光ペン）と文字の設定
- 書体：本文は BIZ UDPゴシック、診断票の書き込みだけ Klee One（どちらも Google Fonts）
- `public/works/`：制作実績の画面写真（NEKOHAMA・Fleur Sereine）

Univasal DVD Classic は画面写真がまだないため、ロゴ風のカードにしています。
写真を用意したら `public/works/univasal.jpg` に置き、`page.tsx` の該当カードを他の2店と同じ `<Image>` に差し替えてください。

## デプロイ

Vercel にこのフォルダをそのまま読み込ませれば公開できます。
