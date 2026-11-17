import Image, { type StaticImageData } from "next/image";
import fleurImage from "../../public/works/fleur.jpg";
import nekohamaImage from "../../public/works/nekohama.jpg";
import hanachozuImage from "../../public/works/hanachozu.jpg";
import brickImage from "../../public/works/brick.jpg";
import forestImage from "../../public/works/forest.jpg";
import { MobileMenu } from "./mobile-menu";
import {
  AREA,
  CONTACT_EMAIL,
  DIAGNOSIS_MAILTO,
  OWNER_NAME,
  GITHUB_URL,
  LINE_URL,
  LINE_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

// 更新のたびにビルドし直す静的ページとして配信する
export const ensureStatic = "navigation";

/* ---------- 内容 ---------- */

const navItems = [
  { href: "#works", label: "制作例" },
  { href: "#security", label: "セキュリティ" },
  { href: "#price", label: "料金" },
  { href: "#faq", label: "よくある質問" },
];

// 診断票の見本（架空のお店）
const sampleFindings = [
  {
    issue: "スマホで商品ページを開くと、「カートに入れる」が画面の外に出ている",
    fix: "写真のすぐ下に移すだけで、買い物の途中で迷う人が減ります。",
    note: "ここがいちばん、もったいない",
  },
  {
    issue: "送料の金額が、ご利用ガイドと商品ページで違っている",
    fix: "1か所にまとめて、どのページからも同じ説明を見られるようにします。",
  },
  {
    issue: "贈り物に選ばれているのに、のしやメッセージカードを選べない",
    fix: "注文画面で選べるようにすると、ギフトの注文が受けやすくなります。",
  },
];

const situations = [
  {
    title: "BASEやカラーミーで売っている",
    body: "商品や顧客の情報を引き継いで、お店を止めずにShopifyへ移します。定期便や海外販売も、あとから足せます。",
  },
  {
    title: "WordPressやEC-CUBEで売っている",
    body: "PHPやプラグインの更新、サーバーの管理から手が離れます。セキュリティの考え方は下で詳しく書いています。",
  },
  {
    title: "海外のお客さんにも売りたい",
    body: "越境ECに対応します。円とドルなどで値段を表示し、英語をはじめ多言語のページと、海外への送料を整えます。以前ベトナムで海外営業をしていた経験も生かします。",
  },
  {
    title: "Instagramで注文を受けている",
    body: "DMでのやりとりを、カートと決済のあるお店に置きかえます。投稿から商品ページへ、そのまま進めるようにします。",
  },
];

type Work = {
  name: string;
  kind: string;
  body: string;
  image?: StaticImageData;
  alt?: string;
  details: string[];
};

const works: Work[] = [
  {
    name: "NEKOHAMA",
    kind: "抹茶のオンラインストア",
    image: nekohamaImage,
    alt: "NEKOHAMAのトップページ。招き猫のロゴと、抹茶の粉の写真",
    body: "招き猫のロゴと抹茶の色を活かし、円とドルの両方で買える作りにしました。立ち上げから運営まで担当しています。",
    details: [
      "多通貨の表示と海外配送",
      "Shopify Flowで在庫アラートと顧客の自動分類",
      "Matrixifyで商品を一括登録",
    ],
  },
  {
    name: "Fleur Sereine",
    kind: "ドライフラワーのオンラインストア",
    image: fleurImage,
    alt: "Fleur Sereineのトップページ。ドライフラワーのブーケの写真",
    body: "ブーケやリースの写真が主役になるよう、文字と飾りを控えた落ち着いた作りにしました。",
    details: [
      "商品写真を大きく見せるトップページ",
      "ブーケ・リース・スワッグの分類",
    ],
  },
  {
    name: "Univasal DVD Classic",
    kind: "クラシック映画DVDのストア",
    body: "日本語字幕付きの名作を扱うお店です。濃紺と金色で、昔の映画館のような雰囲気に仕上げました。",
    details: ["Dawnテーマをもとにデザインを調整"],
  },
];

const services = [
  {
    group: "つくる",
    items: [
      "新しいお店の立ち上げ",
      "デザイン・商品登録・決済と送料の設定",
      "スマホで買いやすい商品ページ",
    ],
  },
  {
    group: "引っ越す",
    items: [
      "BASE・カラーミー・STORESから",
      "WordPress・EC-CUBEから",
      "商品と顧客の情報を引き継ぎ",
    ],
  },
  {
    group: "海外へ売る",
    items: [
      "円・ドルなど多通貨での表示",
      "英語など多言語のページづくり",
      "海外配送と国ごとの送料の設定",
    ],
  },
  {
    group: "続ける",
    items: [
      "新商品の登録や特集の差し替え",
      "LINE・Instagram・TikTok・Googleとの連携",
      "GA4とShopifyの数字を見た改善",
    ],
  },
];

const prices = [
  { name: "ショップ診断（直したほうがいい所を3つ）", price: "無料" },
  { name: "スポット相談（1時間）", price: "3,300円" },
  { name: "ちょっとした修正（1回）", price: "3,300円〜" },
  { name: "ほかのカートからの引っ越し", price: "30,000円〜" },
  {
    name: "はじめての開店（テーマを活かしてシンプルに）",
    price: "50,000円〜",
    regular: "通常 80,000円〜",
  },
  {
    name: "しっかり作る（デザイン調整を含む）",
    price: "120,000円〜",
    regular: "通常 150,000円〜",
  },
  { name: "ライトサポート（修正・商品追加・ご相談）", price: "月5,000円" },
  {
    name: "しっかりサポート（特集の更新・売上を見ながら改善）",
    price: "月10,000円〜",
    regular: "通常 月20,000円〜",
  },
];

const steps = [
  {
    title: "URLを送る",
    body: "お店かSNSのURLと、気になっていることをメールかLINEで送ってください。",
  },
  {
    title: "診断票が届く",
    body: "直したほうがいい所を3つ、文章でお返しします。ここまで無料です。",
  },
  {
    title: "話してみる",
    body: "続けて相談したい方とは、15分ほどお話しします。調布・世田谷・川崎なら伺います。",
  },
  {
    title: "つくる",
    body: "進め方とお見積もりをお送りし、ご依頼いただいてから制作を始めます。",
  },
];

const faqs = [
  {
    q: "パソコンが得意ではないのですが。",
    a: "大丈夫です。普段の操作はスマホでできるようにしてお渡しします。",
  },
  {
    q: "作るだけ、更新だけ、という頼み方もできますか。",
    a: "はい、どちらか一方だけでもお受けしています。",
  },
  {
    q: "Shopifyにすれば、セキュリティはもう心配いりませんか。",
    a: "サーバーと決済まわりはShopifyが守りますが、追加したアプリや管理画面のパスワードの扱いはお店側に残ります。二段階認証の設定など、お店側でできる対策も一緒に整えます。",
  },
  {
    q: "診断を頼んだら、依頼しないといけませんか。",
    a: "いいえ。診断票を読んで、自分で直してもらっても大丈夫です。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  founder: { "@type": "Person", name: OWNER_NAME, sameAs: [GITHUB_URL] },
  areaServed: ["東京都調布市", "東京都世田谷区", "神奈川県川崎市", "日本"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "調布市",
    addressRegion: "東京都",
    addressCountry: "JP",
  },
};

/* ---------- 部品 ---------- */

// 丸いピル型のボタン
function Pill({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outlineDark" | "outlineLight";
  external?: boolean;
}) {
  const styles = {
    solid: "bg-brand text-white hover:bg-brand-strong",
    outlineDark: "border border-white/70 bg-black/35 text-white backdrop-blur-sm hover:border-white hover:bg-black/50",
    outlineLight: "border border-brand text-brand hover:bg-brand hover:text-white",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[1.05rem] font-semibold transition-colors duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}

function SectionHead({
  title,
  lead,
  dark = false,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className={`text-[2rem] font-semibold sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead ? (
        <p className={`mx-auto mt-5 max-w-2xl text-lg ${dark ? "text-white/85" : "text-ink-soft"}`}>{lead}</p>
      ) : null}
    </div>
  );
}

// 最初の画面の主役。実際にお渡しする診断票の見本
function DiagnosisSheet() {
  return (
    <figure className="mx-auto max-w-xl text-left [text-shadow:none]">
      <div className="rounded-[28px] bg-sheet px-7 py-8 text-ink shadow-[0_30px_80px_-30px_rgba(255,255,255,0.25)] sm:px-10 sm:py-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
          <p className="text-lg font-semibold">ショップ診断票</p>
          <p className="text-sm text-ink-faint">見本</p>
        </div>
        <p className="mt-4 text-sm text-ink-soft">焼き菓子のオンラインショップ（架空のお店）を見て、気づいたこと</p>
        <ol className="mt-6 space-y-6">
          {sampleFindings.map((finding, index) => (
            <li key={finding.issue} className="grid grid-cols-[1.75rem_1fr] gap-x-3">
              <span className="text-2xl leading-none font-semibold text-brand">{index + 1}</span>
              <div>
                <p className="font-semibold leading-relaxed">
                  {index === 0 ? <span className="marker">{finding.issue}</span> : finding.issue}
                </p>
                <p className="mt-1 leading-relaxed text-ink-soft">{finding.fix}</p>
                {finding.note ? <p className="mt-2 font-semibold text-brand">― {finding.note}</p> : null}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 border-t border-rule pt-4 text-right text-sm text-ink-soft">
          調布Shopifyサポート　{OWNER_NAME}
        </p>
      </div>
      <figcaption className="mt-5 text-center text-sm text-[#a1a1a6]">無料診断では、こんな診断票をお送りしています。</figcaption>
    </figure>
  );
}

/* ---------- ページ ---------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-sheet text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 上に固定する、半透明の黒いバー */}
      <header className="fixed inset-x-0 top-0 z-30 h-12 bg-night/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between gap-6 px-5">
          <a href="#top" className="text-[0.95rem] font-semibold text-white/90 hover:text-white">
            {SITE_NAME}
          </a>
          <nav aria-label="ページ内メニュー" className="hidden items-center gap-8 text-[0.8rem] md:flex">
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
            href="#contact"
            className="hidden min-h-8 items-center rounded-full bg-brand px-4 text-[0.8rem] font-semibold text-white hover:bg-brand-strong md:inline-flex"
          >
            無料診断
          </a>
          <MobileMenu items={navItems} lineUrl={LINE_URL} />
        </div>
      </header>

      {/* 最初の画面 */}
      <section id="top" className="relative isolate overflow-hidden bg-night px-5 pt-32 pb-24 text-center text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] sm:pt-40">
        {/* 背景の写真。文字が読めるよう、上から黒を重ねて下に向かって黒へ溶かす */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[56rem] sm:h-[60rem]">
          <Image
            src={hanachozuImage}
            alt=""
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center brightness-110 contrast-110 saturate-[1.4]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_40%,rgba(0,0,0,0.55),transparent_75%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-55% to-black" />
        </div>
        <p className="text-lg font-semibold text-white sm:text-xl">{AREA}のShopifyづくり</p>
        <h1 className="mt-4 text-[2.05rem] font-semibold min-[400px]:text-[2.4rem] sm:text-6xl lg:text-[5.25rem]">
          <span className="inline-block">見つけます。</span>
          <br />
          <span className="inline-block">あなたのお店の、</span>
          <br />
          <span className="inline-block">もったいない3つを。</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white sm:text-xl">
          お店のURLを送ってください。直したほうがいい所を3つ、診断票にしてお返しします。依頼するかどうかは、読んでから決めて大丈夫です。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Pill href={DIAGNOSIS_MAILTO}>無料診断を申し込む</Pill>
          <Pill href={LINE_URL} variant="outlineDark" external>
            LINEで相談する
          </Pill>
        </div>
        <p className="mt-5 text-sm text-white/90">
          メール：<span className="select-all">{CONTACT_EMAIL}</span>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          LINE公式アカウントもやっています（ID：<span className="select-all">{LINE_ID}</span>）
        </p>
        <div className="mt-20">
          <DiagnosisSheet />
        </div>
      </section>

      {/* こんなお店に */}
      <section className="bg-mist px-5 py-24 sm:py-32">
        <SectionHead title="こんなお店に、ぴったりです。" />
        <div className="mx-auto mt-14 grid max-w-[1024px] gap-4 md:grid-cols-2">
          {situations.map((s) => (
            <div key={s.title} className="rounded-[28px] bg-sheet p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="mt-4 text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 制作例 */}
      <section id="works" className="px-3 py-24 sm:px-5 sm:py-32">
        <SectionHead title="これまでに作ったお店。" />
        <div className="mx-auto mt-14 grid max-w-[1200px] gap-3 md:grid-cols-2">
          {works.map((work, index) => {
            const dark = !work.image;
            return (
              <article
                key={work.name}
                className={`flex flex-col overflow-hidden rounded-[28px] px-6 pt-12 text-center sm:px-10 ${
                  index === 0 ? "md:col-span-2" : ""
                } ${dark ? "bg-[#0f1a33] text-white" : "bg-mist"}`}
              >
                <p className={`text-sm ${dark ? "text-[#d4b25a]" : "text-ink-soft"}`}>{work.kind}</p>
                <h3 className="mt-1 text-4xl font-semibold sm:text-5xl">{work.name}</h3>
                <p className={`mx-auto mt-4 max-w-xl ${dark ? "text-white/75" : "text-ink-soft"}`}>{work.body}</p>
                <p className={`mx-auto mt-4 max-w-xl text-sm ${dark ? "text-white/60" : "text-ink-faint"}`}>
                  {work.details.join("　／　")}
                </p>
                <div className="mt-auto pt-10">
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={work.alt ?? ""}
                      className={`mx-auto w-full rounded-t-2xl object-cover object-top shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ${
                        index === 0 ? "aspect-[16/8] max-w-4xl" : "aspect-[16/11]"
                      }`}
                      sizes={index === 0 ? "(min-width: 1024px) 900px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                      placeholder="blur"
                    />
                  ) : (
                    <div className="flex aspect-[16/11] w-full flex-col items-center justify-center rounded-t-2xl border border-[#d4b25a]/40 text-[#d4b25a]">
                      <p className="font-serif text-4xl tracking-wide">Univasal</p>
                      <p className="mt-1 font-serif text-sm tracking-[0.35em]">DVD CLASSIC</p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* セキュリティ */}
      <section
        id="security"
        className="relative isolate overflow-hidden bg-night px-5 py-24 text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.6)] sm:py-32"
      >
        {/* 背景のレンガの壁。「お店を守る壁」として */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image src={brickImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover object-top saturate-[1.2]" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <SectionHead
          dark
          title={
            <>
              <span className="inline-block">サイバー攻撃への備えに、</span>
              <br />
              <span className="inline-block">投資を続けるShopifyへ。</span>
            </>
          }
          lead="WordPressやEC-CUBEのように自分でサーバーを持つお店は、PHPやプラグインの更新を続けないと、脆弱性をねらわれることがあります。Shopifyなら、サーバーの管理や更新はShopify側が行います。"
        />
        <dl className="mx-auto mt-16 grid max-w-[1024px] gap-12 text-center sm:grid-cols-3">
          <div>
            <dt className="text-white/85">弱点を見つけた研究者への報奨金</dt>
            <dd className="mt-2 text-5xl font-semibold text-sprout">最高20万ドル</dd>
          </div>
          <div>
            <dt className="text-white/85">HackerOneの公開プログラム176件のうち</dt>
            <dd className="mt-2 text-5xl font-semibold text-sprout">5番目</dd>
            <dd className="mt-2 text-sm text-white/85">に累計100万ドルの支払いへ到達</dd>
          </div>
          <div>
            <dt className="text-white/85">決済まわりの安全基準</dt>
            <dd className="mt-2 text-5xl font-semibold text-sprout">PCI DSS</dd>
            <dd className="mt-2 text-sm text-white/85">カード業界の国際基準に対応</dd>
          </div>
        </dl>
        <p className="mx-auto mt-16 max-w-2xl text-center text-white/85">
          追加したアプリや管理画面のパスワードの扱いは、お店側の責任として残ります。引っ越しのときに、二段階認証などお店側でできる対策も一緒に整えます。
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-white/70">
          出典：Shopifyのバグ報奨金ページ、累計100万ドル到達時のShopify Engineeringの発表
        </p>
      </section>

      {/* できること */}
      <section className="px-5 py-24 sm:py-32">
        <SectionHead title="お手伝いできること。" />
        <div className="mx-auto mt-16 grid max-w-[1024px] gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.group}>
              <h3 className="text-2xl font-semibold">{s.group}</h3>
              <ul className="mt-4 space-y-2 text-ink-soft">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 料金 */}
      <section id="price" className="bg-mist px-5 py-24 sm:py-32">
        <SectionHead
          title="料金。"
          lead="ただいま開業記念価格でお受けしています（先着3件）。金額は税別で、Shopifyの月額料金やアプリ代は別にかかります。"
        />
        <dl className="mx-auto mt-14 max-w-3xl divide-y divide-rule rounded-[28px] bg-sheet px-6 sm:px-10">
          {prices.map((item) => (
            <div key={item.name} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <dt>{item.name}</dt>
              <dd className="sm:text-right">
                <span className="text-lg font-semibold whitespace-nowrap">{item.price}</span>
                {item.regular ? <span className="block text-sm text-ink-faint">{item.regular}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 流れ */}
      <section className="px-5 py-24 sm:py-32">
        <SectionHead title="お願いするときの流れ。" />
        <ol className="mx-auto mt-16 grid max-w-[1024px] gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="text-5xl font-semibold text-brand">{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 私について */}
      <section className="bg-mist px-5 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-[2rem] font-semibold sm:text-5xl">{OWNER_NAME}</h2>
            <p className="mt-3 text-ink-soft">{AREA}在住　／　Shopifyパートナー登録済み</p>
          </div>
          <div className="mt-12 space-y-5 text-[1.05rem] text-ink-soft">
            <p>
              抹茶のオンラインストア「NEKOHAMA」で、立ち上げから運営までを担当してきました。提案書と要件の整理から、構築、決済・多通貨・海外配送の設定、公開前の確認、公開までの進行管理まで、自分の手で進めています。
            </p>
            <p>
              公開後は受注やお客さま対応をしながら、GA4とShopifyの数字を見て改善してきました。固定費と変動費を分けて損益分岐点を確かめるなど、お店の数字を一緒に見ながら、無理なく続けられる運営を考えます。
            </p>
            <p>
              Shopifyのパートナープログラムに登録していて、お店の制作や運用のお手伝いを仕事としてお受けしています。制作はパートナー用の開発ストアで進めるので、公開するまでお店の費用はかかりません。
            </p>
            <p>以前は、東南アジアのベトナムで海外営業をしていました。海外のお客さんに向けたお店づくりも、ご相談ください。</p>
            <p>制作中は毎週、進み具合をご報告します。</p>
          </div>
          <p className="mt-8 text-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chevron text-lg text-brand hover:underline"
            >
              書いたコードをGitHubで見る
            </a>
          </p>
        </div>
      </section>

      {/* よくある質問 */}
      <section id="faq" className="px-5 py-24 sm:py-32">
        <SectionHead title="よくある質問。" />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-rule border-y border-rule">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-lg font-semibold">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="text-2xl font-light text-ink-soft transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* お問い合わせ */}
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-night px-5 py-28 text-center text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] sm:py-36"
      >
        {/* 背景の森の写真 */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src={forestImage}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center brightness-105 contrast-110 saturate-[1.3]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(0,0,0,0.55),rgba(0,0,0,0.15)_80%)]" />
        </div>
        <h2 className="text-[2.2rem] font-semibold sm:text-6xl">
          <span className="inline-block">まずは、</span>
          <span className="inline-block">お店のURLを。</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          直したほうがいい所を3つ、診断票にしてお返しします。1日以内にお返事します。LINEなら、URLを送るだけで大丈夫です。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Pill href={DIAGNOSIS_MAILTO}>無料診断を申し込む</Pill>
          <Pill href={LINE_URL} variant="outlineDark" external>
            LINEで相談する
          </Pill>
        </div>
        <p className="mt-6 text-sm text-white/85">
          ボタンが開かないときは：<span className="select-all text-white/80">{CONTACT_EMAIL}</span>
          <br />
          LINE公式アカウント ID：<span className="select-all text-white/80">{LINE_ID}</span>
        </p>
      </section>

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
    </main>
  );
}
