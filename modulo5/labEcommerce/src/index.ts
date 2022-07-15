import express from "express"
import cors from "cors"
import knex from "knex";
import dotenv from "dotenv";
import { getUsersAll } from "./endpoint/users/getUsersAll";
import { createUsers } from "./endpoint/users/createUsers";
import { createProduct } from "./endpoint/product/createProduct";
import { getProductAll } from "./endpoint/product/getProductAll";
import { createPurchases } from "./endpoint/purchases/createPurchases";
import { getPurchase } from "./endpoint/purchases/getPurchase";

dotenv.config();

export const connection = knex({
    client: 'mysql',
    connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_SCHEMA
    }
 });

 const app = express()
 app.use(express.json())
 app.use(cors())

 app.use("/usersAll",getUsersAll)
 app.use('/users',createUsers );
 app.use("/productCreate", createProduct)
 app.use("/productAll", getProductAll)
 app.use("/purchases", createPurchases)
 app.use("/purchase/:id", getPurchase)

 app.listen(3003, ()=>{
  console.log('Servidor rodando na porta 3003')
})