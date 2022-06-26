import { connection } from '../Data/connection';
import { Task, Users, UsersUpdate } from '../Types/types';


export const readTodoListAllRepository = async () => {
    return await connection("TodoListUser").select()
}

export const readTodoListUserTaskRepository = async () => {
    try {
     
      return await connection.select('*')
      .from('TodoListUser')
      .join(' TodoListTask', function() {
            this
              .on('TodoListUser.id', '=', "TodoListTask.creator_user_id")
          });
      
    } catch (error : any) {
        return error.message
    }
}

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

export const createTodoListTaskRepository = async (task : Task) => {
    try {
        return await connection("TodoListTask").insert(task)
    } catch (error : any) {
        return error.message
    }
}

export const updateTodoLIstUsersRepository = async (id : string, userEdit : UsersUpdate ) => {
    
    try {
        return await connection("TodoListUser").where("id", "=", id).update(userEdit)
    } catch (error : any) {
        return error.message
    }
}