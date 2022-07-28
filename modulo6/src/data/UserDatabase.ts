import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/user";
import { connection } from "../connection";

export class UserDatabase extends BaseDatabase{


    getUserDatabase = async (): Promise<User[]> => {
        try {
            const users: User[] = [];

            const result = await connection()
            .select("*")
            .from ('User_Arq');
      
            for(let user of result) {
              users.push(user)
            }
            return users
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    insertUser =async (user: User): Promise<void> => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

  public deleteUserDatebase = async (id: string): Promise<void> => {
        try {
            await connection()
            .where({id})
            .from('User_Arq')
            .delete()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}