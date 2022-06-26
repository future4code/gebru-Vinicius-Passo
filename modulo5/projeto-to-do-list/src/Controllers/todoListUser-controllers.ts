import { Request, Response } from 'express';
import {
     createTodoListTaskRepository, 
     createTodoListUsersRepository, 
     readTodoListAllRepository, 
     readTodoListUsersRepository, 
     readTodoListUserTaskRepository, 
     updateTodoLIstUsersRepository 
    } 
     from '../Repository/todoListUser-repository';
import { Task, Users, UsersUpdate, UserTask } from '../Types/types';
import { v4 as generateId } from 'uuid';


export const readTodoListAllControllers = async (req: Request, res: Response) => {
    const todoListAll = await readTodoListAllRepository()
    res.send(todoListAll)
}

export const readTodoListUserTaskControllers = async (req: Request, res: Response) => {
    let errorCode = 500
    const id = req.params.id as string
    try {
        const taskUsers : UserTask[] = await readTodoListUserTaskRepository()
        const task = taskUsers?.find( tas => tas.creator_user_id === id) 
        if(!id){
            errorCode = 402
            throw new Error("É necessário informa um id")
        }
        if(task === undefined){
            errorCode = 422
            throw new Error("verifica se o id está cerreto, se estiver usuário não possuie tarefa!")
        }

        res.status(200).send(task)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const readTodoListUsersControllers = async (req: Request, res: Response) => {
    let errorCode = 500
    const id = req.params.id as string
    try {
        const todoListUsersId = await readTodoListUsersRepository(id)
        if(!todoListUsersId.length){
            errorCode = 402
            throw new Error("Id não identificado!")
        }

        res.status(200).send(todoListUsersId)
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

export const createTodoListTaskControllers = async(req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {title, description, status, limitDateTask, creator_user_id } = req.body
        const [day, month, year] = limitDateTask.split("/")
        const limit_date : Date = new Date(`${year}-${month}-${day}`) 

        if(!title || !description|| !limit_date|| !creator_user_id){
            errorCode = 402
            throw new Error("É necessário informa todos os campos!")
        }

        const taks : Task = {
            id: generateId(),
            title,
            description,
            status,
            limit_date,
            creator_user_id
        }

        await createTodoListTaskRepository(taks)

        res.status(201).send("Tarefa criada com sucesso!")

    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }
}

export const updateTodoLIstUsersControllers = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {name, nickname, email} = req.body;
        const {id} = req.params;

        const updateUser : UsersUpdate = {name, nickname, email}
       
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
