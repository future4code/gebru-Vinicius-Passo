import express, {Request, Response} from 'express'
import cors from 'cors'

type conts = {
    name: string
    cpf: string
    idade: number
}

const app = express()
app.use(express.json())
app.use(cors())



app.post('/criar/conta', (req: Request, res: Response) => {
    try{
        const {name, cpf, nascimento} = req.body
        const dataAtual = new Date()
        const anoAtual = dataAtual. getFullYear();

        const idade = anoAtual - nascimento
        const contas: conts[] = [{name: "", cpf: "", idade }]
        console.log("conta", contas)

        if(!name)
        throw new Error ("O campo name precisa ser preenchido!")
        if(!cpf)
        throw new Error("O campo cpf precisa ser preenchido!")
        if(idade < 18)
        throw new Error("É necessário ser maior de idade para criar uma conta!")

        const newConta = {
            name,
            cpf,
            idade
        }
       contas.push(newConta)

       res.send("conta criada")
    
    } catch(Error){

    }
})

app.listen(3003, () => {
    console.log("Servidor de online")
})

// {valor: 100, data: "06/06/2022", descricao: "Compra magazine"}