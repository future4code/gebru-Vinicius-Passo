import { CustonError } from "../error/CustonError";
import { Iuser } from "../model/user";
import { IUserRepository } from "../repository/userRepository";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase implements IUserRepository {
    
    public insertUser =async (user: Iuser): Promise<void> => {
        try {
            await UserDatabase.connection
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            })
            .into("User_Arq")
            
        } catch (error: any) {
            throw new CustonError(400, error.message)
        }
    }

    public findUserByEmail = async (email: string): Promise <Iuser> => {
        try {
            const result = await UserDatabase.connection("User_Arq")
            .select()
            .where({email})
            
            return result[0]
        } catch (error: any) {
            throw new CustonError(400, error.message);
          }
    }
    public findUserById = async (id: string): Promise <Iuser> => {
        try {
            const result = await UserDatabase.connection("User_Arq")
            .select()
            .where({id})
            
            return result[0]
        } catch (error: any) {
            throw new CustonError(400, error.message);
          }
    }
}