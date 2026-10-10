import CommonProductPage from "../components/product/CommonProductPage";
import { getInteriorFlowers } from "../services/interiorFlower";

export default async function InteriorFlowerPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const items = await getInteriorFlowers();
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
      titleImage="/products/interiorflower_header.PNG"
      products={currentProducts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}