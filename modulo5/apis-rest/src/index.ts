import express, { Request, Response }  from "express"
import cors from "cors"
import { AddressInfo } from "net";
import { users } from "./data";
import {UserType} from "./data";
import {User} from "./data"

const app = express()
app.use(express.json());
app.use(cors());

// esse endoint retorna todos usuário e caso passe uma query retorna só o usuário encontrado
// caso não encontra o usuário retorna um erro "usuário não encontrado!"
app.get('/users', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const name = req.query.name as string

        if(!name){
            res.send(users)
        } 

        const user = users.filter( (u) => u.name.toLowerCase() === name.toLowerCase())

        if(!user.length){
            errorCode = 422
            throw new Error("usuário não encontrado!")
        }
        res.status(200).send(user)

    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

app.post('/users', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {name, email, type, age} = req.body 
        console.log(name, email, type, age)
        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error("falta parâmetros a ser passados")
        }
        if(type != UserType.ADMIN && type != UserType.NORMAL){
            errorCode = 422
            throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN' ")
        }

        const newUsur : User = {
            id: Math.random(),
            name,
            email,
            type,
            age
        }
        console.log(newUsur)
        users.push(newUsur)
        res.status(201).send("usuário criado")
    } 
    catch (error : any) {
        res.status(errorCode).send({message:error.message})
    }
})

app.patch('/users/:id/editar', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const id = Number(req.params.id)
        const novoNome = req.body.name as string
        
        if(!novoNome){
            errorCode = 404
            throw new Error("falta parâmento a ser passdo na body!")
        }

        const user = users.find( (u) => u.id === id)

        if(!user){
            errorCode = 404
            throw new Error("usuário não encontrado!")
        }

        for(let i = 0; i < users.length; i++){
            if(id === users[i].id){
                users[i].name = novoNome
            }
        }

        res.status(200).send("usuário editado!")

    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

app.delete('/users/:id/deletar', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const id = Number(req.params.id)
        const idUsurs = users.findIndex( (u) => u.id === id)
        console.log('id usurs', idUsurs)

        if(idUsurs === -1 ){
            errorCode = 404
            throw new Error("usuário não encontrado!")
        }
       

        if (idUsurs > -1) {
            users.splice(idUsurs, 1);
          }

          res.status(200).send('usuário removido!')
    } 
    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
