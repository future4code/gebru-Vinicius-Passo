import { Request, Response } from "express";
import { LikePostBusiness } from "../business/LikePostBusiness";
import { likeDTO } from "../model/like";

export class LikePostController {
    constructor(private likePostBusiness: LikePostBusiness) { }

   async likeController(req: Request, res: Response): Promise<void>  {
    try {
        const authorId = req.params.authorId;
        const postId = req.body.postId;

        const likes: likeDTO = {
            authorId,
            postId
        }

        await this.likePostBusiness.createLikePost(likes)

        res.status(201).send({message: "post curtido!"})

    } catch (error: any) {
        res.status(400).send(error.message)
    }
   }
}