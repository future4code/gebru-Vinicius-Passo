```
---------------------------- EXERCÍCIO 1 ------------------

A) const result = await connection.raw(` SELECT * FROM actor`)
 Quando usuamos esse comando vem todos as informções do banco de dados. mas isso não ta certo, preciso devolver pro usuario so um array então eu mando um result[0]

 B) app.get("/actor/:name", async (req: Request, res: Response) => {
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

C) app.get("/actor/count/:gender", async (req: Request, res: Response)  => {
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

---------------------------- EXERCÍCIO 2 ------------------

A) app.put("/actor/:id/edit", async (req: Request, res: Response): Promise<any> => {
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

B) app.delete("/actor/:id/delete", async (req: Request, res: Response) => {
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

C) problemas tecnos


---------------------------- EXERCÍCIO 3 ------------------

A) app.get("/actor/:id", async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const result = await actorSpecific(id)
        res.status(200).send(result)
    } catch (e) {
        console.log({e})
        return res.status(500).send("algo deu errado!")
    }
})

B) app.get("/actor/query", async(req: Request, res: Response) => {
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

---------------------------- EXERCÍCIO 4 ------------------

A) app.put("/actor/:id/editOtherForm", async(req: Request, res: Response) => {
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
 export const updateSalary = async(id: string, salary: number) => {
    const update = await connection("actor").update({salary}).where({id})
    return update
  }

  B) 

```         