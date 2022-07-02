import { connection } from "..";

export const purchaseId = async (id: string) => {
   return await connection("labecommerce_purchases").select("*").where("user_id", "=", id)
}