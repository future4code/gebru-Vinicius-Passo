import { InvalidRequest } from "../error/InvalidRequest";
import { likeDTO, LikePost } from "../model/like";
import { PostLikeRepository } from "../repository/PostLikeRepository";
import { v4 as generetId } from "uuid";
import { CustonError } from "../error/CustonError";
import { InavlidId } from "../error/InvalidId";

export class LikePostBusiness {
    constructor(private likePostDatabase: PostLikeRepository) {}

   async createLikePost (like: likeDTO): Promise<void>  {
      const {authorId, postId} = like; 

      if(!authorId || !postId){ 
        throw new InvalidRequest()
      }

      const id = generetId()

      const likes: LikePost = {
        id,
        postId,
        authorId
      }
      const checksAuthorId = await this.likePostDatabase.getAthorId()
       
      if(checksAuthorId.length > 0) 

      if(checksAuthorId[0].author_id === likes.authorId) {
        throw new CustonError("Não é possivel curtir o post duas vezes!", 400)
      } 

      await this.likePostDatabase.addLike(likes)
   }
  async deleteLike (id: string)  {
    if(!id) {
     throw new InavlidId()
    }
    const idPostBase = await this.likePostDatabase.deleteLike(id)
  
    if(idPostBase === 0) {
      throw new CustonError("Não é possivél descurtir um post que não existe!", 404)
    }

    await this.likePostDatabase.deleteLike(id)
  }
  
}