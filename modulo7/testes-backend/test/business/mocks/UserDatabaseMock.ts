import { Iuser, USER_ROLES } from "../../../src/model/user";
import { IUserRepository } from "../../../src/repository/userRepository";


export class UserDatabaseMock implements IUserRepository {
   async insertUser(user: Iuser): Promise<void> {
        console.log("usuário criado!")    
    }
   async findUserByEmail(email: string): Promise<Iuser> {
       const user: Iuser = {
            id: "id",
            name: "name",
            email: "email",
            password: "password",
            role: USER_ROLES.NORMAL
       }

       return user
    }
   async findUserById(id: string): Promise<Iuser>{
    const user: Iuser = {
        id: "id",
        name: "name",
        email: "email",
        password: "password",
        role: USER_ROLES.NORMAL
   }

   return user
    }

}