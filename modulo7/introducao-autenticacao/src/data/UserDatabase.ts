import { CustonError } from "../error/CustonError";
import { Iuser } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    
    public insertUser =async (user: Iuser) => {
        try {
            await UserDatabase.connection
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            .into("Face_User")
            
        } catch (error: any) {
            throw new CustonError(400, error.message)
        }
    }

    public findUserByEmail = async (email: string): Promise <Iuser> => {
        try {
            const result = await UserDatabase.connection("Face_User")
            .select()
            .where({email})
            
            return result[0]
        } catch (error: any) {
            throw new CustonError(400, error.message);
          }
    }
}