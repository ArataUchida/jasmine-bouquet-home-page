"use client"

import FlowerSection from "./components/top/FlowerSection";
import FooterList from "./components/top/TopFooter";
import HeroSection from "./components/top/HeroSection";

export default function Home() {
  return (
    <>
      {/* HeroSection */}
      <HeroSection
        bgImage="/top/top.PNG"
        centerImage="/top/swipetoview.PNG"
        scrollTargetId="next"
      />

      {/* ウエディングブーケ */}
      <FlowerSection
        titleImg="/top/weddingbouquet_title.PNG"
        text={`Jasmine bouquetでは様々なデザインのブーケを製作しています。\n花嫁様のご要望に合わせたフルオーダーも可能です!`}
        images={[
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
        ]}
        buttonLabel="作品一覧・料金"
        buttonHref="/wedding bouquet"
      />

      {/* フラワーギフト */}
      <FlowerSection
        titleImg="/top/flowergift_title.PNG"
        text={`Jasmine bouquetでは様々なデザインのブーケを
          製作しています。
          花嫁様のご要望に合わせたフルオーダーも可能です!`}
        images={[
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
        ]}
        buttonLabel="作品一覧・料金"
        buttonHref="/flowergift"
      />

      {/*  ヘアピース */}
      <FlowerSection
        titleImg="/top/hairpiece_title.PNG"
        text={`ブーケやドレスに合わせたヘアピース
          お花だけでなく、パールや水引きも使用しています`}
        images={[
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
        ]}
        buttonLabel="作品一覧・料金"
        buttonHref="/hairpiece"
      />

      {/*  ウェルカムスペース */}
      <FlowerSection
        titleImg="/top/wellcomespace_title.PNG"
        text={`ウェルカムスペースや受付で飾れる装花も製作しています。\n作品一覧にないデザインをご希望の場合は\nフルオーダーでお作りすることも可能です！`}
        images={[
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
        ]}
        buttonLabel="作品一覧・料金"
        buttonHref="/welcomespace"
      />

      {/*  インテリアフラワー */}
      <FlowerSection
        titleImg="/top/interiorflower_title.PNG"
        text={`ご自宅に合わせたインテリアフラワーや季節のアイテムなど\nたくさんの雑貨をお作りしています。\n様々なご要望に可能な限り対応させて頂きます！`}
        images={[
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
          "/top/sample.JPG",
        ]}
        buttonLabel="作品一覧・料金"
        buttonHref="/interiorflower"
      />

      {/* フッター */}
      <FooterList
        items={[
          { label: "商品一覧", href: "#next" },
          { label: "花材紹介", href: "/floralmaterials" },
          { label: "オーダーブーケについて", href: "/orderbouquet" },
          { label: "無料見学・ブーケ合わせ", href: "/freeconsultation" },
          { label: "デザイナー紹介", href: "/designer" },
          { label: "ご注文・お問い合わせ", href: "/contact" },
          { label: "お支払い方法について", href: "/paymentmethods" },
        ]}
      />
    </>
  );
}
