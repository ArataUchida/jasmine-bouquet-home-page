

export default async function OrderBouquetPage() {

  return (
    <>
      <section>
        <img src='/orderbouquet/order_header.PNG' />
      </section>
      {/* STEP1 */}
      <section>
        <div className="text-[#FF9D96] font-sansJP text-center mt-5 mb-5" >
          <p className="text-4xl mb:text-5xl lg:text-6xl">STEP1</p>
          <div className="flex flex-row items-center justify-center mt-2">
            <p className="text-lg mb:text-2xl lg:text-3xl">公式LINE</p>
            <p className="text-xs mb:text-base lg:text-base">または</p>
            <p className="text-lg mb:text-2xl lg:text-3xl">お問合せよりご連絡ください</p>
          </div>
        </div>
        <div className="text-center">
          <div className="flex flex-row items-center justify-center text-[#786449] font-sansJP">
            <div className="flex flex-col items-center">
              <img src='/orderbouquet/line.PNG' className="w-18 shrink-0 mb-3" />
              <a
                href='http://localhost:3000/'
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                jasmine bouquet<br />公式LINE
              </a>
            </div>
            <p className="p-5">or</p>
            <div className="flex flex-col items-center">
              <img src='/orderbouquet/maill.PNG' className="w-18 shrink-0" />
              <a
                href='http://localhost:3000/'
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                お問合せフォーム
              </a>
            </div>
          </div>
          <p
            className="text-[#786449] font-sansJP text-xm mb:text-base lg:text-base mt-5"
          >
            始めにご注文商品やお客様情報のご入力をお願いします。
          </p>
        </div>
        <div className="w-full h-10 bg-[#FDF7F3] mt-10 mb-10" />
      </section >
      {/* STEP2 */}
      < section >
        <div className="text-[#FF9D96] font-sansJP text-center mt-5 mb-5" >
          <p className="text-4xl mb:text-5xl lg:text-6xl">STEP2</p>
          <p className="text-lg mb:text-2xl lg:text-3xl mt-3">カウンセリングシートのご入力</p>
        </div>
        <div className="text-center sm:text-xs text-[10px]">
          <div className="flex flex-row items-center justify-center text-[#786449] font-sansJP">
            <img src='/orderbouquet/counseling.PNG' className="w-28 shrink-0 mb:w-30 lg:w-32" />
            <p className="whitespace-nowrap pl-5 text-xs lg:text-sm">
              お問合せ頂きましたら<br />
              カウンセリングシートを<br />
              LINEまたはメールにて送らせて頂きます。
            </p>
          </div>
          <p
            className="text-[#786449] font-sansJP text-xs mb:text-sm lg:text-sm mt-5"
          >
            ※ドレスのお写真やブーケのイメージ画像など<br />
            無くても問題ございませんが、ご準備頂けますと幸いです。
          </p>
        </div>
        <div className="w-full h-10 bg-[#FDF7F3] mt-10 mb-10" />
      </section >
      {/* STEP3 */}
      < section >
        <div className="text-[#FF9D96] font-kaisei text-center mt-5 mb-5" >
          <p className="text-4xl mb:text-5xl lg:text-6xl">STEP3</p>
          <p
            className="text-lg mb:text-2xl lg:text-3xl mt-2"
          >
            仮組み・デザイン案のご提案<br />
            （カウンセリング後から約1ヶ月以内）
          </p>
        </div>
        <div className="text-center text-xs mb:text-base lg:text-base font-sansJP">
          <p className="text-[#786449]">ブーケの種類によって下記のような流れで進めます。</p>
          <div className="flex flex-row items-center justify-center text-[#786449] mt-5">
            <p className="whitespace-nowrap text-[#FF9D96]">
              ①デザイン案を作成→仮組み<br />
              ②仮組みからご提案
            </p>
            <img src='/orderbouquet/bluebouquet.PNG' className="w-48 shrink-0 md:w-54 lg:w-60" />
          </div>
          <p
            className="text-[#786449] mt-5"
          >
            ★修正を繰り返し本組みに入ります。
          </p>
        </div>
        <div className="w-full h-10 bg-[#FDF7F3] mt-10 mb-10" />
      </section >
      {/* STEP4 */}
      < section >
        <div className="relative text-[#FF9D96] font-kaisei text-center mt-5 mb-15" >
          <img
            src='/orderbouquet/ribon.PNG'
            className="w-100 shrink-0 sm:w-100 md:w-120 lg:w-140 mx-auto"
          />
          <div className="absolute inset-30 lg:inset-35 z-10 flex flex-col items-center justify-center">
            <p className="text-4xl mb:text-5xl lg:text-6xl">STEP4</p>
            <p className="text-lg mb:text-2xl lg:text-3xl mt-2">本組み→納品</p>
          </div>
        </div>
        <div className="text-center text-xs mb:text-base lg:text-base font-sansJP">
          <p
            className="text-[#786449] "
          >
            ご相談と修正を繰り返したら本組みに入ります。<br />
            心を込めて、丁寧に束ねさせて頂きます。
          </p>
          <p
            className="text-[#786449] mt-5"
          >
            完成品をお写真でご確認頂き<br />
            問題がなければ納品になります。
          </p>
        </div>
        <div className="w-full h-50 bg-[#FDF7F3] mt-10" />
      </section >
    </>);
}