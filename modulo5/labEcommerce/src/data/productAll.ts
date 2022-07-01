import { connection } from "..";

export const productAll = async () => {
    return await connection("labecommerce_products").select()
} 