type WeddingBouquet = {
    id: number;
    image: string;
    price: number;
};

export async function getWeddingBouquets(): Promise<WeddingBouquet[]> {
    const response = await fetch(
        "http://localhost:3000/api/products"
    );

    if (!response.ok) {
        throw new Error("商品の取得に失敗しました");
    }

    return response.json();
}