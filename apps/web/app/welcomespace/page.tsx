import CommonProductPage from "../components/product/CommonProductPage";
import { getWelcomeSpace } from "../services/welcomeSpace";

export default async function WeddingBouquetPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const items = await getWelcomeSpace();
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
      titleImage="/products/welcomespace_header.PNG"
      products={currentProducts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}