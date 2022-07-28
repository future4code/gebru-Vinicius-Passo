import knex from "knex";
import dotenv from "dotenv";
import { User } from "./User"

dotenv.config();


export class UserData {
    private connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA
        }
    });

    public getAll = async () => {
        try {
            const result = await this.connection("labecommerce_users")
                .select("*")

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
} 