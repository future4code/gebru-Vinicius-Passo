import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/CustomError";
import { ILoginDTO, IuserDTO } from "../model/user";

export class UserController {
    constructor(private userBusiness: UserBusiness) {}
   
    public userSinup = async (req: Request, res: Response ) => {
        try {
            const {name, email, password} = req.body;
            const input : IuserDTO = {
                name,
                email,
                password
            }

           const token = await this.userBusiness.signup(input)
            
           res.status(200).send({message: "usuário criado com sucesso", token})

        } catch (error: any) {
            res.send(error.message).status(error.statusCode)
        }
    }

    public userLogin = async (req: Request, res: Response ) => {
        try {
            const { email, password} = req.body;
            const input : ILoginDTO = {
                email,
                password
            }

           const token = await this.userBusiness.login(input)
            
           res.status(200).send({message: "usuário logado com sucesso!", token})

        } catch (error: any) {
            res.send(error.message).status(error.statusCode)
        }
    }
}