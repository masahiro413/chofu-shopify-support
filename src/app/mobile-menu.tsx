"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export function MobileMenu({
  items,
  lineUrl,
}: {
  items: Item[];
  lineUrl: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
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
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="md:hidden" data-mobile-menu>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-11 w-11 items-center justify-center rounded-[3px] text-ink hover:bg-rule/60"
        data-menu-button
      >
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-6 bg-current transition-transform duration-200 motion-reduce:transition-none ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-6 bg-current transition-opacity duration-200 motion-reduce:transition-none ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-6 bg-current transition-transform duration-200 motion-reduce:transition-none ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      <nav
        id="mobile-menu-panel"
        aria-label="ページ内メニュー"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-rule bg-paper px-5 pb-6 shadow-[0_8px_16px_-12px_rgba(20,36,31,0.35)]"
        data-menu-panel
      >
        <ul>
          {items.map((item) => (
            <li key={item.href} className="border-b border-rule">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center text-[1.05rem] font-bold text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 grid gap-3">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-12 items-center justify-center rounded-[3px] bg-brand px-6 font-bold text-white hover:bg-brand-strong"
          >
            無料診断を申し込む
          </a>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] border-2 border-[#06C755] bg-sheet px-6 font-bold text-ink"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 rounded-full bg-[#06C755]"
            />
            LINEで相談する
          </a>
        </div>
      </nav>
    </div>
  );
}
