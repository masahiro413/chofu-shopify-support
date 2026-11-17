"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string };

// スマホ用のメニュー。ボタンで開閉し、開くとメニューが上からすっと降りてくる
export function MobileMenu({ items, lineUrl }: { items: Item[]; lineUrl: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 開いている間は後ろのページをスクロールさせない
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const bar =
    "absolute h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none";

  return (
    <div className="md:hidden" data-mobile-menu>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-11 w-11 items-center justify-center text-white/85 hover:text-white"
        data-menu-button
      >
        <span aria-hidden="true" className={`${bar} ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
        <span aria-hidden="true" className={`${bar} ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
      </button>

      <nav
        id="mobile-menu-panel"
        aria-label="ページ内メニュー"
        inert={!open}
        className={`fixed inset-x-0 top-12 h-[calc(100dvh-3rem)] overflow-y-auto bg-night px-8 pt-6 pb-10 transition-[transform,opacity,visibility] duration-500 ease-out motion-reduce:transition-none ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-6 opacity-0"
        }`}
        data-menu-panel
      >
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[1.75rem] font-semibold text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-3">
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 font-semibold text-white hover:bg-brand-strong"
          >
            無料診断を申し込む
          </a>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 font-semibold text-white hover:border-white"
          >
            LINEで相談する
          </a>
        </div>
      </nav>
    </div>
  );
}
