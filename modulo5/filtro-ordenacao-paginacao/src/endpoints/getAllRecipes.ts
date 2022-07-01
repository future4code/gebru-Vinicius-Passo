import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"


export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> { 

   let errorCode = 500
   let name = req.query.name as string
   let sort = req.query.sort as string
   let order = req.query.order as string
   let size = Number(req.query.size)
   let page = Number(req.query.page)
   try {

      if(!name){
         name = "%"
      }
      if( sort !== "name" && sort !== "email"){
         sort = "name"
      }
      if(sort === "email"){
         sort = "email"
      }

      if(isNaN(size) || size < 1){
         size = 5
      }

      if(isNaN(page) || page < 1){
         page = 1
      }

      let offset = size * (page - 1)
   
      const users = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      if(users.length < 1){
         errorCode = 402
         throw new Error("Nenhum usuario encontrado!")
      }

      const recipes = users.map(toRecipe);
      res.status(200).send(recipes)
      
   } catch (error : any) {
      console.log(error)
      res.status(errorCode).send(error.message || error.sqlMessage)
   }
}


const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      name: input.name,
      email: input.email
   }
}