import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginDTO, IuserDTO } from "../model/user";


export class UserController {
    
    public signup = async (req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body
            const input: IuserDTO = {
                name,
                email, 
                password
            }
            const userBusiness = new UserBusiness();
            const token = await userBusiness.signup(input)
            
            res.status(201).send({message: "usuário criado!", token})
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    public login = async (req: Request, res: Response) => {
        try {
            const { email, password} = req.body
            const input: ILoginDTO = {
                email, 
                password
            }
            const userBusiness = new UserBusiness();
            const token = await userBusiness.login(input)
            
            res.status(201).send({message: "usuário logado!", token})
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}