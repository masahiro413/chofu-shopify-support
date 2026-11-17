import type { Metadata } from "next";
import Image from "next/image";
import pineappleImage from "../../../public/works/pineapple.png";
import nightImage from "../../../public/works/nightview.jpg";
import { shopifyFeatures } from "@/lib/shopify";
import { DIAGNOSIS_MAILTO, LINE_URL, SITE_NAME } from "@/lib/site";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Shopifyについて｜特長・料金プラン・向いているお店",
  description:
    "Shopifyとはどんな仕組みか、できること、日本円の料金プラン、向いているお店をまとめました。調布のShopify制作・運用サポートが、わかりやすく説明します。",
  alternates: { canonical: "/shopify" },
};

const numbers = [
  { value: "175以上", label: "の国と地域で使われています" },
  { value: "数百万", label: "のお店がShopifyで営業しています" },
  { value: "13,000以上", label: "のアプリで機能を足せます" },
];

// 2026年時点のShopify公式の日本円価格（税別）。改定されることがある
const plans = [
  { name: "スターター", monthly: "750円", yearly: "—", fit: "SNSやメッセージで、商品のリンクを送って売りたい方" },
  { name: "ベーシック", monthly: "4,850円", yearly: "3,650円", fit: "ひとりで、はじめて本格的なネットショップを開く方" },
  { name: "グロウ", monthly: "13,500円", yearly: "10,100円", fit: "スタッフ数人で運営し、売上の分析もしたいお店" },
  { name: "アドバンスト", monthly: "58,500円", yearly: "44,000円", fit: "海外販売や、より細かい分析・低い手数料を求めるお店" },
  { name: "Shopify Plus", monthly: "個別見積もり", yearly: "—", fit: "大きな企業・たくさんの注文を扱うお店" },
];

const fits = [
  { title: "写真やブランドを大事にしたい", body: "テーマを土台に、お店の世界観に合わせてデザインを整えられます。" },
  { title: "BASEやカラーミーから、もう一歩進みたい", body: "定期便や多言語化など、あとから機能を足していけます。商品や顧客の情報も引き継げます。" },
  { title: "WordPressの更新や保守から離れたい", body: "サーバーの管理や更新はShopify側が行うので、プラグインの更新に追われません。" },
  { title: "海外のお客さんにも売りたい", body: "多言語・多通貨の表示や、国ごとの送料の設定が標準でそろっています。" },
];

export default function ShopifyPage() {
  return (
    <main className="min-h-screen bg-sheet text-ink">
      <SiteHeader />

      {/* はじめに */}
      <section className="overflow-hidden bg-[#151a1b] px-5 pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
          <nav aria-label="パンくずリスト" className="text-sm text-white/60">
            <a href="/" className="hover:underline">
              {SITE_NAME}
            </a>
            <span className="mx-2" aria-hidden="true">
              ›
            </span>
            Shopifyについて
          </nav>
          <h1 className="mt-6 text-[2.6rem] font-semibold sm:text-7xl">Shopifyについて。</h1>
          <span aria-hidden="true" className="mt-8 block h-1 w-40 rounded-full bg-[#5ce65c]" />
          <p className="mt-8 max-w-2xl text-lg text-white/80 sm:text-xl">
            Shopify（ショッピファイ）は、カナダのShopify Inc.が運営する、世界最大級のネットショップの仕組みです。お店のサイトづくりから、注文・在庫の管理、決済、配送、集客まで、ひとつの管理画面でできます。
          </p>
          </div>
          {/* 商品写真の見本。背景と手を消して切り抜いたパイナップル */}
          <div className="relative mx-auto">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-[10%] mx-auto h-1/2 w-[90%] rounded-full bg-[#5ce65c]/20 blur-3xl" />
            <Image
              src={pineappleImage}
              alt="背景を消して切り抜いた、丸ごとのパイナップル"
              priority
              sizes="(min-width: 1024px) 210px, 160px"
              className="relative mx-auto h-[440px] w-auto lg:h-[560px]"
            />
            <p className="relative mt-4 text-center text-sm text-white/55">背景を消した商品写真の見本</p>
          </div>
        </div>
      </section>

      {/* 数字。夜景の写真の上に、すりガラスの数字を重ねる */}
      <section className="relative isolate overflow-hidden px-5 py-28 text-white sm:py-40">
        <Image
          src={nightImage}
          alt=""
          fill
          sizes="(max-width: 768px) 400vw, 100vw"
          placeholder="blur"
          className="-z-10 object-cover object-[50%_85%] brightness-110 contrast-105 saturate-[1.2]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#151a1b] via-transparent via-40% to-black/40" />
        <h2 className="mx-auto max-w-3xl text-center text-[2rem] font-semibold [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] sm:text-5xl">
          世界中の街で、使われています。
        </h2>
        <dl className="mx-auto mt-14 grid max-w-[1100px] gap-4 sm:grid-cols-3">
          {numbers.map((n) => (
            <div key={n.value} className="rounded-[28px] bg-black/35 px-8 py-10 text-center ring-1 ring-white/20 backdrop-blur-md">
              <dt className="sr-only">{n.label}</dt>
              <dd className="text-[2.75rem] font-semibold whitespace-nowrap text-[#5ce65c] lg:text-[3.25rem]">{n.value}</dd>
              <dd className="mt-3 text-white/85">{n.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* できること */}
      <section className="px-5 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] font-semibold sm:text-5xl">Shopifyでできること。</h2>
        </div>
        <ul className="mx-auto mt-14 grid max-w-[1100px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shopifyFeatures.map((f) => (
            <li key={f.title} className="rounded-[28px] bg-mist p-8">
              <h3 className="text-2xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-ink-soft">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 料金 */}
      <section className="bg-mist px-5 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] font-semibold sm:text-5xl">料金プラン。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            初期費用はかかりません。月額の利用料と、売れたときの決済手数料で使えます。プランを上げるほど、決済手数料は下がります。
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md gap-3 sm:hidden">
          {plans.map((p) => (
            <li key={p.name} className="rounded-[24px] bg-sheet p-6">
              <p className="text-lg font-semibold">{p.name}</p>
              <p className="mt-1 text-2xl font-semibold">
                {p.monthly}
                {p.monthly.endsWith("円") ? <span className="text-sm font-normal text-ink-soft">／月（月払い）</span> : null}
              </p>
              {p.yearly !== "—" ? <p className="text-sm text-ink-soft">年払いなら月{p.yearly}</p> : null}
              <p className="mt-3 text-ink-soft">{p.fit}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-14 hidden max-w-[1000px] overflow-x-auto rounded-[28px] bg-sheet sm:block">
          <table className="w-full min-w-[640px] text-left">
            <caption className="sr-only">Shopifyの料金プラン（月額・税別）</caption>
            <thead>
              <tr className="border-b border-rule text-sm text-ink-soft">
                <th scope="col" className="px-6 py-5 font-normal">プラン</th>
                <th scope="col" className="px-6 py-5 font-normal">月払い</th>
                <th scope="col" className="px-6 py-5 font-normal">年払い（月あたり）</th>
                <th scope="col" className="px-6 py-5 font-normal">向いている方</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {plans.map((p) => (
                <tr key={p.name}>
                  <th scope="row" className="px-6 py-5 font-semibold whitespace-nowrap">
                    {p.name}
                  </th>
                  <td className="px-6 py-5 font-semibold whitespace-nowrap">{p.monthly}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-ink-soft">{p.yearly}</td>
                  <td className="px-6 py-5 text-ink-soft">{p.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-6 max-w-[1000px] text-center text-sm text-ink-faint">
          2026年時点のShopify公式の日本円価格（税別）です。料金は改定されることがあるので、契約前に公式サイトの料金ページで最新の金額をご確認ください。どのプランが合うかは、無料診断でもご相談いただけます。
        </p>
      </section>

      {/* 向いているお店 */}
      <section className="px-5 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] font-semibold sm:text-5xl">こんなお店に向いています。</h2>
        </div>
        <ul className="mx-auto mt-14 grid max-w-[1100px] gap-4 md:grid-cols-2">
          {fits.map((f) => (
            <li key={f.title} className="rounded-[28px] bg-mist p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-ink-soft">{f.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center">
          <a href="/#security" className="chevron text-lg text-brand hover:underline">
            Shopifyのセキュリティについて
          </a>
        </p>
      </section>

      {/* 相談 */}
      <section className="bg-[#151a1b] px-5 py-24 text-center text-white sm:py-32">
        <h2 className="text-[2rem] font-semibold sm:text-5xl">
          <span className="inline-block">Shopifyのお店づくりは、</span>
          <br />
          <span className="inline-block">調布から手伝います。</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          今のお店のURLを送ってください。Shopifyにしたら良くなる所も含めて、直したほうがいい所を3つお返しします。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={DIAGNOSIS_MAILTO}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 text-[1.05rem] font-semibold text-white hover:bg-brand-strong"
          >
            無料診断を申し込む
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-7 text-[1.05rem] font-semibold text-white hover:border-white"
          >
            LINEで相談する
          </a>
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-xs text-white/45">
          出典：Shopify「About us」（175以上の国と地域・数百万の事業者）、Shopify App Storeの公開数（13,000以上）、Shopify公式の日本円料金（2024年5月から円建て）
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
