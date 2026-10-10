export type Product = {
    id: number;
    image: string;
    price: number;
};

export type CommonProductPageProps = {
    titleImage: string;
    products: Product[];
    currentPage: number;
    totalPages: number;
};
``