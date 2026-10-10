import CommonProductPage from "../components/product/CommonProductPage";
import { getFlowerGifts } from "../services/flowerGifts";

export default async function FlowerGiftPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const items = await getFlowerGifts();
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const productsPerPage = 12;
  const totalPages = Math.ceil(items.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = items.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  return (
    <CommonProductPage
      titleImage="/products/flowergift_header.PNG"
      products={currentProducts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}