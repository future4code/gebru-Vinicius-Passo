import { connection } from '../Data/connection';
import { Users } from '../Types/types';


export const readTodoListUsersRepository = async (id: string) => {
    try {
        return await connection("TodoListUser").select().where("id", id)
    } catch (error : any) {
        return error.messagem
    }
}

export const createTodoListUsersRepository = async (users : Users ) => {
    try {
        return await connection("TodoListUser").insert(users)
    } catch (error : any) {
        return error.message
    }
}

export const updateTodoLIstUsersRepository = async (id : string, userEdit : Users ) => {
    console.log("liguie", id, userEdit)
    try {
        return await connection("TodoListUser").where("id", "=", id).update(userEdit)
    } catch (error : any) {
        return error.message
    }
}