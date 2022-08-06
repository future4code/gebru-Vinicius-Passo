import {  Request, Response } from "express"
import { FriendBusiness } from "../business/FriendBusiness"
import { friendDTO } from "../model/friend"

export class FriendController {
    constructor(private friendBusiness: FriendBusiness) {}

    async createFriendController(req: Request, res: Response) {
        try {
            const authorId = req.params.authorId
            const friendId = req.body.friendId
            const friends: friendDTO = {
                authorId,
                friendId
            }
            await this.friendBusiness.createFriendBusiness(friends)
            res.status(201).send({ message: "amizade feita!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    async deleteFriendController(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await this.friendBusiness.deleteFriend(id)

            res.status(200).send({ message: "Amizade desfeita!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}