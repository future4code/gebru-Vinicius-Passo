import { contaUsuario } from './data';
import express, {Request, Response} from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid';
import {erros} from './erros'



const app = express()
app.use(express.json())
app.use(cors())


app.get('/contas/usuarios', (req: Request, res: Response) => {
      const usuario = contaUsuario.map( (item) => [{id: item.id,name:item.name, cpf:item.cpf}]).flat()
      res.send(usuario)
})


// endpoit para criar uma conta!
app.post('/contas/criar', (req: Request, res: Response) => {
    try{
        const {name, cpf, dataNascimento} = req.body
        const dataAtual = new Date()
        const anoAtual = dataAtual.getFullYear();
        const pegandoAno = dataNascimento.split('/')
        const anoParaSaberIdade : number = pegandoAno[2] as number
        const idade = anoAtual - anoParaSaberIdade

        if(!name || !cpf || !dataNascimento)
        throw new Error (erros.CAMPOSBODY_NOT_FOUND.message)
        
        if(idade < 18)
         throw new Error(erros.AGE_NOT_FOUND.message)

        contaUsuario.push({
            id:generateId(),
            name,
            cpf,
            dataNascimento,
            saldo: 0.00,
            extrato: [{valor: 0.00, descricao:"", data: ""}]
        })

       res.send("conta criada")
    
    } catch(error : any){
        switch (error.message) {
            case erros.AGE_NOT_FOUND.message:
                res.status(erros.AGE_NOT_FOUND.status).send(erros.AGE_NOT_FOUND.message)
                break
            case erros.CAMPOSBODY_NOT_FOUND.message:
                res.status(erros.CAMPOSBODY_NOT_FOUND.status).send(erros.CAMPOSBODY_NOT_FOUND.message)
                break
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
        }
    }
})

app.get('/contas/saldo', (req: Request, res: Response) => {
   try{
       const authorization = req.headers.authorization
       const usuario = contaUsuario.find( (i) => i.cpf === authorization)
       const idUsuario = usuario?.name
       const idCpf = usuario?.cpf
       const saldo = usuario?.saldo
       
       if(!authorization)
       throw new Error(erros.SALDO_NOT_FOUND.message)

       if(!idUsuario )
         throw new Error(erros.USUARIO_NOT_FOUND.message)   

       if(idCpf !== authorization)
         throw new Error(erros.USUARIO_NOT_FOUND.message)   
       
         res.send( {name: idUsuario , saldo: saldo})
   }
   catch(error: any) {
    switch (error.message) {
        case erros.SALDO_NOT_FOUND.message:
            res.status(erros.SALDO_NOT_FOUND.status).send(erros.SALDO_NOT_FOUND.message)
            break
        case erros.USUARIO_NOT_FOUND.message:
            res.status(erros.USUARIO_NOT_FOUND.status).send(erros.USUARIO_NOT_FOUND.message)
            break
        case erros.USUARIO_NOT_FOUND.message:
            res.status(erros.USUARIO_NOT_FOUND.status).send(erros.USUARIO_NOT_FOUND.message)
            break     
        default: 
         res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)         
    }
   }
})

app.put('/contas/adicionar/saldo', (req: Request, res: Response) => {
    try{
        const idName = req.body.name as string
        const cpfBody = req.body.cpf as string
        const saldoAdicionado = req.body.saldo
        const dataBody = req.body.data as string
        const saldoAtual : number = saldoAdicionado

        const usuario = contaUsuario.find( (u) => u.cpf === cpfBody)
        const idUsuario = usuario?.name
        const idCpf = usuario?.cpf

        if(!cpfBody || !idName || !dataBody || saldoAtual < 0 || saldoAtual === 0)
        throw new Error(erros.SALDO_NOT_FOUND.message)


        if(!idUsuario)
         throw new Error(erros.USUARIO_NOT_FOUND.message) 

         if(idCpf !== cpfBody)
         throw new Error(erros.USUARIO_NOT_FOUND.message) 
         
         if(usuario?.cpf !== cpfBody || idName !== idUsuario)
            throw new Error(erros.USUARIO_NOT_FOUND.message)
         usuario.saldo = saldoAtual + usuario.saldo
         usuario.extrato[0].valor = usuario.saldo
         usuario.extrato[0].descricao = "Depósito de dinheiro"
         usuario.extrato[0].data = dataBody

       res.send("saldo adicionado!")
    }
    catch (error : any) {
        switch (error.message){
            case erros.SALDO_NOT_FOUND.message:
                res.status(erros.SALDO_NOT_FOUND.status).send(erros.SALDO_NOT_FOUND.message)
                break
            case erros.USUARIO_NOT_FOUND.message:
                res.status(erros.USUARIO_NOT_FOUND.status).send(erros.USUARIO_NOT_FOUND.message)
                break
            case erros.USUARIO_NOT_FOUND.message:
                res.status(erros.USUARIO_NOT_FOUND.status).send(erros.USUARIO_NOT_FOUND.message)
                break   
            case erros.USUARIO_NOT_FOUND.message:
                res.status(erros.USUARIO_NOT_FOUND.status).send(erros.USUARIO_NOT_FOUND.message)    
            default: 
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)            
        }
    }
})


app.listen(3003, () => {
    console.log("Servidor aberto na porta 3003")
})
