import { Request, Response } from 'express';
import { createTodoListUsersRepository, readTodoListUsersRepository, updateTodoLIstUsersRepository } from '../Repository/todoListUser-repository';
import { Users } from '../Types/types';
import { v4 as generateId } from 'uuid';


export const readTodoListUsersControllers = async (req: Request, res: Response) => {
    let errorCode = 500
    const id = req.params.id as string
    try {
        const todoListUsuersId = await readTodoListUsersRepository(id)
        if(!todoListUsuersId.length){
            errorCode = 402
            throw new Error("Id não identificado!")
        }

        res.status(200).send(todoListUsuersId)
    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }
}

export const createTodoListUsersControllers = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {name, nickname, email} = req.body
       
        if(!name || !nickname || !email){
            throw new Error("É necessário informar todos os campos!")
        }
        const users : Users = {
            id: generateId(),
            name,
            nickname,
            email
        }
        await createTodoListUsersRepository(users)
        res.status(201).send("usuário criado com sucesso!")
    } catch (error : any) {
        
        res.status(errorCode).send(error.message)
    }
}

export const updateTodoLIstUsersControllers = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {name, nickname} = req.body;
        const {id} = req.params;

        const updateUser : Users = {name, nickname}
        console.log(updateUser)
        if(!id){
            errorCode = 402
            throw new Error("E necessario informa um id")
        }
        if(!name || !nickname){
            errorCode = 422
            throw new Error("todos os campos devem ser preenchidos!")
        }

         await updateTodoLIstUsersRepository(id, updateUser)
      
        res.send("usuario atualizado!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

// if(!userEdit.length){
//     errorCode = 402
//     throw new Error("Id não identificado!")
// }
