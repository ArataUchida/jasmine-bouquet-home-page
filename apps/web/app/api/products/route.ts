import { NextResponse } from "next/server";

const products = [
    { id: 1, image: "/top/sample.JPG", price: 33000 },
    { id: 2, image: "/top/sample.JPG", price: 33000 },
    { id: 3, image: "/top/sample.JPG", price: 33000 },
    { id: 4, image: "/top/sample.JPG", price: 33000 },
    { id: 5, image: "/top/sample.JPG", price: 33000 },
    { id: 6, image: "/top/sample.JPG", price: 33000 },
    { id: 7, image: "/top/sample.JPG", price: 33000 },
    { id: 8, image: "/top/sample.JPG", price: 33000 },
    { id: 9, image: "/top/sample.JPG", price: 33000 },
    { id: 10, image: "/top/sample.JPG", price: 33000 },
    { id: 11, image: "/top/sample.JPG", price: 33000 },
    { id: 12, image: "/top/sample.JPG", price: 33000 },
    { id: 13, image: "/top/sample.JPG", price: 34000 },
    { id: 14, image: "/top/sample.JPG", price: 33000 },
    { id: 15, image: "/top/sample.JPG", price: 33000 },
    { id: 16, image: "/top/sample.JPG", price: 33000 },
    { id: 17, image: "/top/sample.JPG", price: 33000 },
    { id: 18, image: "/top/sample.JPG", price: 33000 },
    { id: 19, image: "/top/sample.JPG", price: 33000 },
    { id: 20, image: "/top/sample.JPG", price: 33000 },
    { id: 21, image: "/top/sample.JPG", price: 33000 },
    { id: 22, image: "/top/sample.JPG", price: 33000 },
    { id: 23, image: "/top/sample.JPG", price: 33000 },
    { id: 24, image: "/top/sample.JPG", price: 33000 },
    { id: 25, image: "/top/sample.JPG", price: 33000 },
    { id: 26, image: "/top/sample.JPG", price: 33000 },
    { id: 27, image: "/top/sample.JPG", price: 33000 },
    { id: 28, image: "/top/sample.JPG", price: 33000 },
    { id: 29, image: "/top/sample.JPG", price: 33000 },
    { id: 30, image: "/top/sample.JPG", price: 33000 },
    { id: 31, image: "/top/sample.JPG", price: 33000 },
    { id: 32, image: "/top/sample.JPG", price: 33000 },
    { id: 33, image: "/top/sample.JPG", price: 33000 },
    { id: 34, image: "/top/sample.JPG", price: 33000 },
    { id: 35, image: "/top/sample.JPG", price: 33000 },
    { id: 36, image: "/top/sample.JPG", price: 33000 },
];

export async function GET() {
    return NextResponse.json(products);
}