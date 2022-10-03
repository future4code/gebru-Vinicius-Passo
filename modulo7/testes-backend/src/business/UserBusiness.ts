import { UserDatabase } from "../data/UserDatabase";
import { CustonError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/CustonError";
import { ILoginDTO, Iuser, IuserDTO, USER_ROLES } from "../model/user";
import { IAuthenticator, IHashGenerator, IIDGenerator } from "../ports/userPorts";
import { IUserRepository } from "../repository/userRepository";


export class UserBusiness {
    constructor(
        private userDataBase: IUserRepository,
        private idGenerator: IIDGenerator,
        private authenticator: IAuthenticator,
        private hashManager: IHashGenerator
    ) {}

    public signup = async (input: IuserDTO): Promise<string> => {
        try {
            let { name, email, password, role } = input;

            if (!name || !email || !password) {
                throw new CustonError(400, "Preencha os campos 'email', 'password'")
            }

            if (!email.includes("@")) {
                throw new InvalidEmail();
            }

            if (name.length < 4) {
                throw new InvalidName()
            }

            if (role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN) {
                role = "NORMAL"
            }

            const hashPassword = await this.hashManager.generateHash(password)

            const id: string = this.idGenerator.generateId();

            const user: Iuser = {
                id,
                name,
                email,
                password: hashPassword,
                role
            }

            await this.userDataBase.insertUser(user)

            const token = this.authenticator.generateToken({ id, role });
            return token;
        } catch (error: any) {
            throw new CustonError(400, error.message)
        }
    }
    public login = async (input: ILoginDTO): Promise<string> => {
        try {
            let { email, password, role } = input;

            if (!email || !password) {
                throw new CustonError(400, "Preencha os campos 'email', 'password' 'role'")
            }

            if (!email.includes("@")) {
                throw new InvalidEmail();
            }

            if (role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN) {
                role = "NORMAL"
            }

            const user = await this.userDataBase.findUserByEmail(email)

            if (role !== user.role) {
                throw new CustonError(422, "usuário sem permissão")
            }



            const hashCompare = await this.hashManager.compareHash(password, user.password)

            if (!user) {
                throw new UserNotFound()
            }

            if (!hashCompare) {
                throw new InvalidPassword()
            }

            const id = user.id

            const token = this.authenticator.generateToken({ id, role });
            return token;
        } catch (error: any) {
            throw new CustonError(400, error.message)
        }
    }

    public getProfiller = async (token: string) => {
        try {
            const ProfileId = this.authenticator.getTokenData(token)
            const id: string = ProfileId.id
            const userDatabase = new UserDatabase()
            const profile = await userDatabase.findUserById(id)

            if (!profile) {
                throw new UserNotFound()
            }

            if (ProfileId.role !== "NORMAL") {
                throw new CustonError(401, "Apenas um usuário normal pode acessar esta funcionalidade")
            }

            return { id: profile.id, email: profile.email }
        } catch (error: any) {
            throw new CustonError(400, error.message)
        }
    }
}