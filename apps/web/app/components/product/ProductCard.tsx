type ProductCardProps = {
    image: string;
    price: number;
};

export default function ProductCard({
    image,
    price,
}: ProductCardProps) {
    return (
        <button
            type="button"
            className="w-full text-center"
        >
            <img
                src={image}
                alt=""
                className="w-full aspect-[3/4] object-cover"
            />

            <p className="mt-2 font-kaisei text-[#786449] text-base">
                ¥{price.toLocaleString()}
            </p>
        </button>
    );
}