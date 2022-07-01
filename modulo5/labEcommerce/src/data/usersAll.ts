import { connection } from "..";

export const usersAll = async () => {
    return await connection("labecommerce_users").select()
} 