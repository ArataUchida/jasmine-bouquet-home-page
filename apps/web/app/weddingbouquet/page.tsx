import { getWeddingBouquets } from "../services/weddingBouquets";
import CommonProductPage from "../components/product/CommonProductPage";

export default async function WeddingBouquetPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const weddingBouquets = await getWeddingBouquets();
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const productsPerPage = 12;
  const totalPages = Math.ceil(weddingBouquets.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = weddingBouquets.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  return (
    <CommonProductPage
      titleImage="/products/weddingbouquet_header.PNG"
      products={currentProducts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}