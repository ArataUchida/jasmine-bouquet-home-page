import { Product } from "../type/products";

export async function getInteriorFlowers(): Promise<Product[]> {
    const response = await fetch(
        "http://localhost:3000/api/products"
    );

    if (!response.ok) {
        throw new Error("商品の取得に失敗しました");
    }

    return response.json();
}