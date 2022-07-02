import { connection } from "..";

export const productAll = async (name: string, sort: string, order: string) => {
    return await connection("labecommerce_products").where("name", "like", `%${name}%`)
    .orderBy(sort,order)
} 
