import connection from "./data/connection";
import {Request, Response} from "express";
import app from "./App";
import {avgSalary, actorSpecific, updateSalary} from "./endpoints"


app.get("/actor", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        SELECT * FROM actor
        `)
        res.status(200).send(result[0])
    } catch (e) {
        console.log({e});
        return res.status(500).send("algo deu errado!")
    }
})

app.get("/actor/query", async(req: Request, res: Response) => {
    const gender = req.query.gender as string
    console.log(gender)
    try {
          const count = await connection.raw(`
        SELECT COUNT(*) as count FROM actor WHERE gender = "${gender}" 
        `)
        res.send(count[0])
    } catch (e) {
        console.log({e})
        return res.status(500).send("algo deu muito errado!")
    }
})

app.get("/actor/:gender/average", async (req: Request, res: Response) => {
    const gender = req.params.gender
    try {
        const result = await avgSalary(gender)
        console.log(result)
       res.status(200).send(result)
    } catch (e) {
        console.log({e})
        return res.status(500).send("algo deu errado!")
    }
})

app.get("/actor/:id", async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const result = await actorSpecific(id)
        res.status(200).send(result)
    } catch (e) {
        console.log({e})
        return res.status(500).send("algo deu errado!")
    }
})

app.get("/actor/:name", async (req: Request, res: Response) => {
    try {
      const name = req.params.name  
      const result = await connection("actor")
      .select()
      .where({
        name
      })
      res.status(200).send(result)
    } catch (e) {
        console.log({e})
        return res.status(500).send("algo deu errado!")
    }
})

app.get("/actor/count/:gender", async (req: Request, res: Response)  => {
    try {
       const gender = req.params.gender
       const result = await connection.raw(`
       SELECT COUNT(*) as count FROM actor WHERE gender = "${gender}" 
       `)
     
       res.status(200).send(result[0])
    } catch (e) {
        console.log({e})
        return res.status(500).send("algo deu errado!")
    }
})

app.put("/actor/:id/edit", async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id as string
    const salary = req.body.salary as number
  
    try {
        await connection("actor")
        .update({salary})
        .where("id", id)

        res.send("ok!")
    } 
    catch (e) {
        console.log(e)
        return res.status(500).send("algo deu errado!")
    }
})

app.put("/actor/:id/editOtherForm", async(req: Request, res: Response) => {
    const id = req.params.id as string
    const salary = req.body.salary as number

    try {
         await updateSalary(id, salary)

         res.status(200).send("atualizado!")
      
    } catch (e) {
        console.log({e})
        return res.status(500).send("erro no servidor!")
    }
})


app.delete("/actor/:id/delete", async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        await connection("actor")
        .delete()
        .where({id})
        res.send("actor delete!")
    } catch (e) {
        console.log({e})
        return res.status(500).send("algo deu errado!")
        
    }
})


