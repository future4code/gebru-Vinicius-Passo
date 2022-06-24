import { Request, Response } from 'express';
import { createTodoListUsersRepository, readTodoListUsersRepository } from '../Repository/todoListUser-repository';
import { Users } from '../Types/types';
import { v4 as generateId } from 'uuid';



export const readTodoListUsersControllers = async (req: Request, res: Response) => {
    let errorCode = 500
    const id = req.params.id as string
    try {
        const todoListUsuersId = await readTodoListUsersRepository(id)
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
