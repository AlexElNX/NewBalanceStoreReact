import { createProduct } from "../factory/productFactory.js";

export async function getProducts() {
    const response = await fetch("/data/products.json");

    if (!response.ok) {
        throw new Error("Failed to load products");
    }
    const data = await response.json();

    return data.map(createProduct);
}