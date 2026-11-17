import { AREA, GITHUB_URL, LINE_URL, SITE_NAME } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";

// どのページからでも動くよう、トップページの場所は「/#…」で書く
export const navItems = [
  { href: "/shopify", label: "Shopifyとは" },
  { href: "/#works", label: "制作例" },
  { href: "/#security", label: "セキュリティ" },
  { href: "/#price", label: "料金" },
  { href: "/#faq", label: "よくある質問" },
];

// 上に固定する、半透明の黒いバー
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 h-12 bg-night/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between gap-6 px-5">
        <a href="/" className="text-[0.95rem] font-semibold text-white/90 hover:text-white">
          {SITE_NAME}
        </a>
        <nav aria-label="メニュー" className="hidden items-center gap-8 text-[0.8rem] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 opacity-90 transition-opacity duration-300 hover:text-white hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/#contact"
          className="hidden min-h-8 items-center rounded-full bg-brand px-4 text-[0.8rem] font-semibold text-white hover:bg-brand-strong md:inline-flex"
        >
          無料診断
        </a>
        <MobileMenu items={navItems} lineUrl={LINE_URL} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-mist px-5 py-8 text-xs text-ink-faint">
      <div className="mx-auto flex max-w-[1024px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="フッター" className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-ink-soft hover:underline">
              {item.label}
            </a>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:underline">
            GitHub
          </a>
        </nav>
        <p>
          © {SITE_NAME}（{AREA}）
        </p>
      </div>
    </footer>
  );
}
