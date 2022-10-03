import { Iuser } from "../model/user"

export interface IUserRepository {
     insertUser(user: Iuser): Promise<void>
     findUserByEmail(email: string): Promise <Iuser>
     findUserById(id: string): Promise<Iuser> 
}