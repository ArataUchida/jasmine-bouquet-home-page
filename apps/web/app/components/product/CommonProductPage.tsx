import { CommonProductPageProps } from "@/app/type/products";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

export default function CommonProductPage({
    titleImage,
    products,
    currentPage,
    totalPages,
}: CommonProductPageProps) {
    return (
        <main>
            <section className="relative min-h-screen overflow-hidden bg-white">
                <div className="absolute inset-x-0 top-0 h-1/5 bg-[#f5eee3]" />

                <div
                    className="
            absolute
            top-1
            left-1/2
            h-[470px]
            w-[470px]
            -translate-x-1/2
            rounded-full
            bg-white
          "
                />

                {/* タイトル画像 */}
                <img
                    src={titleImage}
                    alt=""
                    className="relative z-10 mx-auto w-full"
                />

                {/* 絞り込み */}
                <div className="relative z-10 mr-5 mt-1 flex items-center justify-end gap-2 font-kaisei text-[#ff8585]">
                    <button
                        type="button"
                        className="text-base"
                    >
                        絞り込み検索
                    </button>
                    <SlidersHorizontal
                        size={28}
                        strokeWidth={1.5}
                    />
                </div>

                <p className="relative z-10 mt-1 text-center font-kaisei text-sm leading-relaxed text-[#786449]">
                    写真をタップすると
                    <br />
                    様々な角度からご覧頂けます
                </p>

                {/* 商品一覧 */}
                <div className="relative z-10 mt-5 grid grid-cols-3 gap-x-4 gap-y-14 px-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </section>
        </main>
    );
}