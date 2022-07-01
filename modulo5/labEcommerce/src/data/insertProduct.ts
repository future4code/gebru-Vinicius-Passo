import { connection } from "..";

export const insertProduct = async (
    id: string,
    name: string,
    price: number,
    imageUrl: string
) => {
    await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        imageUrl
    })
} 