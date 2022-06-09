import { contaUsuario } from './data';
import express, {Request, Response} from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid';
import {erros} from './erros'
import { realpathSync } from 'fs';


const app = express()
app.use(express.json())
app.use(cors())


app.get('/contas/usuarios', (req: Request, res: Response) => {
      const usuario = contaUsuario.map( (item) => [{id: item.id,name:item.name, cpf:item.cpf}]).flat()
      res.send(usuario)
})


// endpoit para criar uma conta!
app.post('/criar/conta', (req: Request, res: Response) => {
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
            extrato: [{valor: 0.00, data: ""}]
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

// Edpoint para pegar saldo de uma conta
app.get('/pegar/:name/saldo', (req: Request, res: Response) => {
   try{
       const idName = req.params.name
       const authorization = req.headers.authorization
       const usuario = contaUsuario.find( (i) => i.name === idName)
       const idUsuario = usuario?.name
       const idCpf = usuario?.cpf
       const saldo = usuario?.saldo
       
       if(!idName || !authorization)
       throw new Error(erros.SALDO_NOT_FOUND.message)

       if(idUsuario !== idName)
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

app.put('/saldo/:name/adicionar', (req: Request, res: Response) => {
    try{
        const idName = req.params.name
        const authorization = req.headers.authorization
        const saldoAdicionado = req.body.saldo
        const saldoAtual : number = saldoAdicionado

        const usuario = contaUsuario.find( (i) => i.name === idName)
        const idUsuario = usuario?.name
        const idCpf = usuario?.cpf

        if(!idName || !authorization)
        throw new Error(erros.SALDO_NOT_FOUND.message)

        if(idUsuario !== idName)
         throw new Error(erros.USUARIO_NOT_FOUND.message) 

         if(idCpf !== authorization)
         throw new Error(erros.USUARIO_NOT_FOUND.message) 
         
         if(usuario?.cpf === authorization)
         usuario.saldo = saldoAtual
      
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
            default: 
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)            
        }
    }
})

app.listen(3003, () => {
    console.log("Servidor de online")
})