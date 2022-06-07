import express, {Request, Response} from "express"
import cors from "cors"
import { v4 as generateId } from 'uuid';
import {produtos} from './data'


const app = express()
app.use(express.json())
app.use(cors())

app.get('/test', (req: Request, res: Response) => {
    res.send("Api está funcionando certinho!")
})

app.post('/criar/produto', (req: Request, res: Response) => {
    // const newProdutos = produtos
    const { name, price} = req.body

    if(!name || !price)
    throw new Error("Algum paramentro faltando, é necessario todos os campos preenchidos!")

    produtos.push({
        id: generateId(),
        name,
        price
    })

    res.status(201).send("Produto criado com sucesso!")
})

app.get('/produtos', (req: Request, res: Response) => {
   res.send(produtos)
})

app.put('produto/:idProduto/edit', (req: Request, res: Response) => {
    try{
        const idProduto = req.params.idProduto
        const {price} = req.body
        console.log("oii",price)

        produtos.filter( (item) => {
            item.id === idProduto
        }).map( (item) => {
            produtos.push({
                id:item.id,
                name: item.name,
                price
            })
        })
        res.send("Editado com sucesso")
    } 
    catch{
        
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})