import { contaUsuario } from './data';
import express, {Request, Response} from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid';


const app = express()
app.use(express.json())
app.use(cors())

console.log("olá mundo")

app.post('/criar/conta', (req: Request, res: Response) => {
    try{
        const {name, cpf, dataNascimento} = req.body
        const dataAtual = new Date()
        const anoAtual = dataAtual.getFullYear();
        const pegandoAno = dataNascimento.split('/')
        const anoParaSaberIdade : number = pegandoAno[2] as number
        const idade = anoAtual - anoParaSaberIdade

        if(!name || !cpf || !dataNascimento)
        throw new Error ("O campo name precisa ser preenchido!")
        
        if(idade < 18)
        throw new Error("É necessário ser maior de idade para criar uma conta!")

        contaUsuario.push({
            id:generateId(),
            name,
            cpf,
            dataNascimento,
            saldo: 0.00,
            extrato: [{valor: 0.00, data: ""}]
        })

       res.send("conta criada")
    
    } catch(Error){

    }
})

app.listen(3003, () => {
    console.log("Servidor de online")
})

// {valor: 100, data: "06/06/2022", descricao: "Compra magazine"}