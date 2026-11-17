import Image, { type StaticImageData } from "next/image";
import fleurImage from "../../public/works/fleur.jpg";
import nekohamaImage from "../../public/works/nekohama.jpg";
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
    body: "円とドルなどで値段を表示し、英語のページと海外への送料を整えます。NEKOHAMAで実際に設定してきた内容です。",
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
    details: ["商品写真を大きく見せるトップページ", "ブーケ・リース・スワッグの分類"],
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
    items: ["新しいお店の立ち上げ", "デザイン・商品登録・決済と送料の設定", "スマホで買いやすい商品ページ"],
  },
  {
    group: "引っ越す",
    items: ["BASE・カラーミー・STORESから", "WordPress・EC-CUBEから", "商品と顧客の情報を引き継ぎ"],
  },
  {
    group: "海外へ売る",
    items: ["円・ドルなど多通貨での表示", "英語のページづくり", "海外配送と国ごとの送料の設定"],
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
  { name: "はじめての開店（テーマを活かしてシンプルに）", price: "50,000円〜", regular: "通常 80,000円〜" },
  { name: "しっかり作る（デザイン調整を含む）", price: "120,000円〜", regular: "通常 150,000円〜" },
  { name: "ライトサポート（修正・商品追加・ご相談）", price: "月5,000円" },
  { name: "しっかりサポート（特集の更新・売上を見ながら改善）", price: "月10,000円〜", regular: "通常 月20,000円〜" },
];

const steps = [
  { title: "URLを送る", body: "お店かSNSのURLと、気になっていることをメールかLINEで送ってください。" },
  { title: "診断票が届く", body: "直したほうがいい所を3つ、文章でお返しします。ここまで無料です。" },
  { title: "話してみる", body: "続けて相談したい方とは、15分ほどお話しします。調布・世田谷・川崎なら伺います。" },
  { title: "つくる", body: "進め方とお見積もりをお送りし、ご依頼いただいてから制作を始めます。" },
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
  address: { "@type": "PostalAddress", addressLocality: "調布市", addressRegion: "東京都", addressCountry: "JP" },
};

/* ---------- 部品 ---------- */

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={DIAGNOSIS_MAILTO}
      className="inline-flex min-h-12 items-center justify-center rounded-[3px] bg-brand px-6 py-3 font-bold text-white hover:bg-brand-strong"
    >
      {children}
    </a>
  );
}

function LineButton() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] border-2 border-[#06C755] bg-sheet px-6 py-3 font-bold text-ink hover:bg-[#06C755] hover:text-white"
    >
      <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-[#06C755]" />
      LINEで相談する
    </a>
  );
}

function SectionTitle({ children, lead }: { children: React.ReactNode; lead?: React.ReactNode }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold sm:text-[2rem]">{children}</h2>
      {lead ? <p className="mt-4 text-ink-soft">{lead}</p> : null}
    </div>
  );
}

// 最初の画面の主役。実際にお渡しする診断票の見本
function DiagnosisSheet() {
  return (
    <figure className="relative">
      <div className="border border-rule bg-sheet px-6 py-7 shadow-[6px_8px_0_0_var(--color-rule)] sm:px-9 sm:py-9">
        <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
          <p className="text-lg font-bold">ショップ診断票</p>
          <p className="text-sm text-ink-soft">見本</p>
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          焼き菓子のオンラインショップ（架空のお店）を見て、気づいたこと
        </p>

        <ol className="mt-6 space-y-6">
          {sampleFindings.map((finding, index) => (
            <li key={finding.issue} className="grid grid-cols-[2rem_1fr] gap-x-3">
              <span className="font-hand text-2xl leading-none font-semibold text-leaf">{index + 1}</span>
              <div>
                <p className="font-bold leading-relaxed">
                  {index === 0 ? <span className="marker">{finding.issue}</span> : finding.issue}
                </p>
                <p className="mt-1 font-hand text-[1.05rem] leading-relaxed text-ink-soft">{finding.fix}</p>
                {finding.note ? (
                  <p className="mt-2 font-hand text-[1.05rem] font-semibold text-leaf">― {finding.note}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 border-t border-dashed border-rule pt-4 text-right font-hand text-ink-soft">
          調布Shopifyサポート　{OWNER_NAME}
        </p>
      </div>
      <figcaption className="mt-5 text-sm text-ink-soft">
        無料診断では、こんな紙をお送りしています。
      </figcaption>
    </figure>
  );
}

/* ---------- ページ ---------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
          <a href="#top" className="font-bold">
            {SITE_NAME}
          </a>
          <nav aria-label="ページ内メニュー" className="hidden items-center gap-7 text-[0.95rem] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-ink-soft hover:text-ink hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-[3px] border-2 border-brand px-4 text-sm font-bold text-brand hover:bg-brand hover:text-white"
          >
            無料診断
          </a>
        </div>
      </header>

      {/* 最初の画面 */}
      <section id="top" className="mx-auto grid max-w-6xl gap-14 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pt-20 lg:pb-28">
        <div>
          <p className="text-ink-soft">{AREA}で、個人店のShopifyづくりを手伝っています</p>
          <h1 className="mt-5 text-[1.7rem] font-bold min-[400px]:text-[1.9rem] sm:text-[2.4rem] xl:text-[2.6rem]">
            <span className="inline-block">見つけます。</span>
            <br />
            <span className="inline-block">あなたのお店の、</span>
            <br />
            <span className="inline-block">
              もったいない3つを。
            </span>
          </h1>
          <p className="mt-6 max-w-[34em] text-[1.05rem] text-ink-soft">
            お店のURLを送ってください。直したほうがいい所を3つ、診断票にしてお返しします。
            はじめまして、{OWNER_NAME}です。抹茶のオンラインストアを立ち上げから運営まで手がけてきました。依頼するかどうかは、診断票を読んでから決めて大丈夫です。
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryButton>無料診断を申し込む</PrimaryButton>
            <LineButton />
          </div>
          <div className="mt-4">
            <p className="text-sm text-ink-soft">
              メール：<span className="select-all">{CONTACT_EMAIL}</span>
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              LINE公式アカウントもやっています（ID：<span className="select-all">{LINE_ID}</span>）
            </p>
          </div>
        </div>
        <DiagnosisSheet />
      </section>

      {/* こんなお店から */}
      <section className="border-t border-rule bg-sheet">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionTitle>こんなお店から、相談を受けています</SectionTitle>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {situations.map((s) => (
              <div key={s.title} className="border-l-[3px] border-brand pl-5">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 制作例 */}
      <section id="works" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionTitle>これまでに作ったお店</SectionTitle>
        <div className="mt-14 space-y-20">
          {works.map((work, index) => (
            <article
              key={work.name}
              className={`grid gap-8 lg:items-center lg:gap-14 ${
                index % 2 === 1
                  ? "lg:grid-cols-[1fr_1.35fr] lg:[&>*:first-child]:order-2"
                  : "lg:grid-cols-[1.35fr_1fr]"
              }`}
            >
              <div className="border border-rule bg-sheet p-2">
                {work.image ? (
                  <Image
                    src={work.image}
                    alt={work.alt ?? ""}
                    className="aspect-[16/10] w-full object-cover object-top"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    placeholder="blur"
                  />
                ) : (
                  <div className="flex aspect-[16/10] w-full flex-col items-center justify-center bg-[#13213f] text-[#d4b25a]">
                    <p className="font-serif text-3xl tracking-wide">Univasal</p>
                    <p className="mt-1 font-serif text-sm tracking-[0.35em]">DVD CLASSIC</p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm text-ink-soft">{work.kind}</p>
                <h3 className="mt-1 text-2xl font-bold">{work.name}</h3>
                <p className="mt-4 text-ink-soft">{work.body}</p>
                <ul className="mt-5 space-y-1.5 text-[0.95rem]">
                  {work.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.8em] h-px w-3 flex-none bg-ink" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* セキュリティ */}
      <section id="security" className="bg-brand text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <h2 className="text-2xl font-bold sm:text-[2rem]">
            サイバー攻撃への備えに、
            <br />
            投資を続けているShopifyへ。
          </h2>
          <div className="space-y-6 text-white/85">
            <p>
              WordPressやEC-CUBEのように自分でサーバーを持つお店は、PHPやプラグインの更新を続けないと、脆弱性をねらわれることがあります。Shopifyなら、サーバーの管理や更新はShopify側が行います。
            </p>
            <p>
              Shopifyは、弱点を見つけてくれた世界中の研究者に
              <strong className="text-sprout">最高20万ドル</strong>
              の報奨金を出しています。脆弱性診断の大手HackerOneでは、176ある公開プログラムのうち
              <strong className="text-sprout">5番目に、累計100万ドル</strong>
              の報奨金支払いに届きました。決済まわりは、カード業界の国際基準PCI DSSに対応しています。
            </p>
            <p className="border-t border-white/25 pt-6 text-[0.95rem] text-white/70">
              追加したアプリや管理画面のパスワードの扱いは、お店側の責任として残ります。引っ越しのときに、二段階認証などお店側でできる対策も一緒に整えます。
            </p>
            <p className="text-xs text-white/55">
              出典：Shopifyのバグ報奨金ページ、累計100万ドル到達時のShopify Engineeringの発表
            </p>
          </div>
        </div>
      </section>

      {/* できること */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionTitle>お手伝いできること</SectionTitle>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.group} className="border-t-2 border-ink pt-5">
              <h3 className="text-xl font-bold">{s.group}</h3>
              <ul className="mt-4 space-y-2.5 text-ink-soft">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 料金 */}
      <section id="price" className="border-y border-rule bg-sheet">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionTitle lead="ただいま開業記念価格でお受けしています（先着3件）。金額は税別で、Shopifyの月額料金やアプリ代は別にかかります。">
            料金
          </SectionTitle>
          <dl className="mt-12 max-w-3xl space-y-5">
            {prices.map((item) => (
              <div key={item.name}>
                <div className="flex items-baseline gap-3">
                  <dt>{item.name}</dt>
                  <span aria-hidden="true" className="leader" />
                  <dd className="font-bold whitespace-nowrap">{item.price}</dd>
                </div>
                {item.regular ? <p className="text-right text-sm text-ink-soft">{item.regular}</p> : null}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 流れ */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionTitle>お願いするときの流れ</SectionTitle>
        <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="text-3xl font-bold text-brand">{index + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 私について */}
      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold sm:text-[2rem]">{OWNER_NAME}</h2>
            <p className="mt-2 text-ink-soft">{AREA}在住</p>
            <p className="mt-1 text-ink-soft">Shopifyパートナー登録済み</p>
          </div>
          <div className="max-w-[38em] space-y-5 text-ink-soft">
            <p>
              抹茶のオンラインストア「NEKOHAMA」で、立ち上げから運営までを担当してきました。提案書と要件の整理から、構築、決済・多通貨・海外配送の設定、公開前の確認、公開までの進行管理まで、自分の手で進めています。
            </p>
            <p>
              公開後は受注やお客さま対応をしながら、GA4とShopifyの数字を見て改善してきました。固定費と変動費を分けて損益分岐点を確かめるなど、お店の数字を一緒に見ながら、無理なく続けられる運営を考えます。
            </p>
            <p>
              Shopifyのパートナープログラムに登録していて、お店の制作や運用のお手伝いを仕事としてお受けしています。制作はパートナー用の開発ストアで進めるので、公開するまでお店の費用はかかりません。
            </p>
            <p>制作中は毎週、進み具合をご報告します。</p>
            <p>
              これまでに書いたコードは
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 font-bold text-brand underline underline-offset-4 hover:text-brand-strong"
              >
                GitHub
              </a>
              で公開しています。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section id="faq" className="border-t border-rule bg-sheet">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionTitle>よくある質問</SectionTitle>
          <div className="mt-10 max-w-3xl divide-y divide-rule border-y border-rule">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-4 font-bold">
                  {faq.q}
                  <span aria-hidden="true" className="text-xl text-brand group-open:hidden">
                    ＋
                  </span>
                  <span aria-hidden="true" className="hidden text-xl text-brand group-open:inline">
                    −
                  </span>
                </summary>
                <p className="pb-5 text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 border-2 border-ink bg-sheet px-6 py-12 sm:px-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-[2rem]">まずは、お店のURLを送ってください</h2>
            <p className="mt-4 max-w-[34em] text-ink-soft">
              直したほうがいい所を3つ、診断票にしてお返しします。たいてい1日以内にお返事しています。
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:items-start">
            <PrimaryButton>無料診断を申し込む</PrimaryButton>
            <LineButton />
            <p className="text-sm text-ink-soft">
              LINE公式アカウントもやっています（ID：{LINE_ID}）。LINEなら、お店のURLを送るだけで大丈夫です。
              <br />
              ボタンが開かないときは、こちらへ：
              <br />
              <span className="font-bold text-ink select-all">{CONTACT_EMAIL}</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:justify-between sm:px-8">
          <span>
            {SITE_NAME}（{AREA}）
          </span>
          <span>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">
              GitHub
            </a>
            <span className="mx-3" aria-hidden="true">/</span>© {SITE_NAME}
          </span>
        </div>
      </footer>
    </main>
  );
}
