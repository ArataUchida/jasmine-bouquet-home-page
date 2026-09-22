"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
};

export default function Pagination({
    currentPage,
    totalPages,
}: PaginationProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mt-20 flex items-center justify-center gap-3 pb-10 font-kaisei text-[#786449]">
            {/* 前へ */}
            {currentPage > 1 && (
                <button
                    type="button"
                    onClick={() => changePage(currentPage - 1)}
                    className="text-3xl font-light transition-opacity hover:opacity-60"
                >
                    ‹
                </button>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => changePage(page)}
                        className={`
                            flex h-10 w-10 items-center justify-center rounded-full transition-all
                            ${currentPage === page
                                ? "bg-[#786449] text-white font-bold"
                                : "text-[#786449]/60 hover:bg-[#f5f1ea]"
                            }
                        `}
                    >
                        {page}
                    </button>
                );
            })}

            {/* 次へ */}
            {currentPage < totalPages && (
                <button
                    type="button"
                    onClick={() => changePage(currentPage + 1)}
                    className="text-3xl font-light transition-opacity hover:opacity-60"
                >
                    ›
                </button>
            )}
        </div>
    );
}