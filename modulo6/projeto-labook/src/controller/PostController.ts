import express, { Express, Request, Response } from "express"
import { postCB } from "../@types/user"
import { PostBusiness } from "../business/PostBusiness"


export class PostController {
    async getPostController(req: Request, res: Response): Promise<any> {
        try {
         const id = req.params.id as string
          const post = await new PostBusiness().getPost(id)
    
          res.send(post).status(200);
        } catch (error: any) {
          res.send(error.message);
        }
      }
    async createPostControler(req: Request, res: Response) {
        try {
            const { photo, description, type, authorId } = req.body
            const input: postCB = {
              photo,
              description,
              type,
              authorId
            }
            const postBusiness = new PostBusiness()
            await postBusiness.createPost(input)
            res.status(201).send({message: "post criado com sucesso!"})
        } catch (error: any) {
            res.end(error.message)
        }
    }
}