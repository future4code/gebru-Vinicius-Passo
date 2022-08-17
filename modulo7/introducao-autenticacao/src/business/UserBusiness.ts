import { UserDatabase } from "../data/UserDatabase";
import { CustonError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/CustonError";
import { ILoginDTO, Iuser, IuserDTO } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator()

export class UserBusiness {

    public signup = async (input: IuserDTO): Promise <string> => {
        try {
            const {name, email, password} = input;

            if(!name || !email || !password) {
                throw new CustonError( 400 ,"Preencha os campos 'email', 'password'")
            }

            if(!email.includes("@")) {
                throw new InvalidEmail();
            }

            if(name.length < 4) {
                throw new InvalidName()
            }

            const id: string = idGenerator.generateId();

            const user: Iuser = {
                id,
                name,
                email,
                password
            }

            const userDataBase = new UserDatabase() 
            await userDataBase.insertUser(user)

            const token = authenticator.generateToken({id});
            return token;
        } catch (error: any) {
           throw new CustonError(400, error.message) 
        }
    }
    public login = async (input: ILoginDTO): Promise <string> => {
        try {
            const { email, password} = input;

            if(!email || !password) {
                throw new CustonError( 400 ,"Preencha os campos 'email', 'password'")
            }

            if(!email.includes("@")) {
                throw new InvalidEmail();
            }

            const userDataBase = new UserDatabase()
            const user = await userDataBase.findUserByEmail(email)

            if(!user) {
                throw new UserNotFound()
            }

            if(user.password !== password) {
                throw new InvalidPassword()
            }  
            
            const id = user.id

            const token = authenticator.generateToken({id});
            return token;
        } catch (error: any) {
           throw new CustonError(400, error.message) 
        }
    }
}