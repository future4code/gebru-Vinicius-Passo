import { connection } from "../index";

export const insertUsers = async (
    id: string,
    name: string,
    email: string,
    password: string
) => {
    await connection("labecommerce_users")
    .insert({
        id,
        name,
        email,
        password
    })
} 