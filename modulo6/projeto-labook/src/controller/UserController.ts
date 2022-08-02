import express, { Express, Request, Response } from "express"
import { friendCB } from "../@types/friend";
import { userCB } from "../@types/user";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
   async createFriendController(req: Request, res: Response) {
    try {
        const authorId = req.params.authorId
        const friendId = req.body.friendId
        const friends: friendCB = {
            authorId,
            friendId
        }
        const userBusiness = new UserBusiness()
        await userBusiness.createFriendBusiness(friends)
        res.status(201).send({message: "amizade feita!"})
    } catch (error: any) {
        res.end(error.message)
    }
   }
    async createUserControler(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const input: userCB = {
                name,
                email,
                password
            }
            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)
            res.status(201).send({message: "usuário criado com sucesso!"})
        } catch (error: any) {
            res.end(error.message)
        }
    }
}