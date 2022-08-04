import express, { Express, Request, Response } from "express"
import { friendDTO } from "../model/friend";
import { userDTO } from "../model/user";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    constructor(private userBusiness: UserBusiness) { }

    async feadController(req: Request, res: Response) {
        try {
            const id = req.params.id

            const feed = await this.userBusiness.getFeadUserBusiness(id)
            res.send(feed).status(200)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    async createFriendController(req: Request, res: Response) {
        try {
            const authorId = req.params.authorId
            const friendId = req.body.friendId
            const friends: friendDTO = {
                authorId,
                friendId
            }
            await this.userBusiness.createFriendBusiness(friends)
            res.status(201).send({ message: "amizade feita!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    async createUserControler(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const input: userDTO = {
                name,
                email,
                password
            }
            await this.userBusiness.createUser(input)
            res.status(201).send({ message: "usuário criado com sucesso!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    async deleteFriendController(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await this.userBusiness.deleteFriend(id)

            res.status(200).send({ message: "Amizade desfeita!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}