import { Request, Response } from "express"
import { postDTO} from "../model/user"
import { PostBusiness } from "../business/PostBusiness"


export class PostController {
    constructor(private postBusiness: PostBusiness){}
    async getPostController(req: Request, res: Response): Promise<any> {
        try {
         const id = req.params.id as string
          const post = await this.postBusiness.getPost(id)
    
          res.send(post).status(200);
        } catch (error: any) {
          res.status(400).send(error.message)
      }
      }
    async createPostControler(req: Request, res: Response) {
        try {
            const { photo, description, type, authorId } = req.body
            const input: postDTO = {
              photo,
              description,
              type,
              authorId
            }
            await this.postBusiness.createPost(input)
            res.status(201).send({message: "post criado com sucesso!"})
        } catch (error: any) {
          res.status(400).send(error.message)
      }
    }
}