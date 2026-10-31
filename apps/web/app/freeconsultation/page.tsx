

export default async function FreeConsultationPage() {

  return (
    <>
      <section className="bg-[#FDF7F3]">
        <img src='/freeconsultation/freeconsultation_header.PNG' />
        <div className="flex flex-col text-center font-kaisei">
          <p className="text-[#786449] ">アトリエにお越しいただくと・・・</p>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center bg-white font-kaise text-[#FF9D96] m-5">
              <img src='/freeconsultation/bouquet.PNG' />
              <p>
                様々なブーケや作品を<br />
                実際にご覧頂けます！
              </p>
            </div>

            <div className="flex flex-col items-center bg-white font-kaise text-[#FF9D96] m-5">
              <img src='/freeconsultation/mirror.PNG' />
              <p>
                実際にブーケを<br />
                鏡の前で合わせられます！
              </p>
            </div>
          </div>
          <img src='/freeconsultation/butterfly.PNG' className="w-50" />
          <div className="relative rounded-[21px] border-[1.5px] border-[#b8a28d] mx-5 px-10 pb-9 pt-9">
            <h2
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fcf7f4] px-8 text-[25px] font-medium text-[#62584e]"
            >
              詳細
            </h2>
            <div className="text-[15px] leading-[1.45] text-[#75695d] text-start">
              <p>
                場所：埼玉県鴻巣市内<br />
                住所はご予約完了後にご連絡させて頂きます。
              </p>
              <br />
              <p>
                最寄り駅：JR北本駅(駅まで送迎可能)
              </p>
              <br />
              <p>
                駐車場：有（お車でお越しいただくことも可能です。）
              </p>
              <br />
              <p>
                料金：無料
              </p>
            </div>
          </div>
          <img src='/freeconsultation/youyoyaku.PNG' />
        </div>
        <div className="flex flex-col bg-white ">
          <div className="text-[#FF9D96] font-sansJP text-center mt-5 mb-5" >
            <div className="flex flex-row items-center justify-center mt-2">
              <p className="text-lg mb:text-2xl lg:text-3xl">公式LINE</p>
              <p className="text-xs mb:text-base lg:text-base">または</p>
              <p className="text-lg mb:text-2xl lg:text-3xl">お問合せよりご連絡ください</p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-row items-center justify-center text-[#786449] font-sansJP pb-20">
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
          </div>
          <div className="w-hull h-50 bg-[#FDF7F3]" />
        </div>
      </section>
    </>);
}