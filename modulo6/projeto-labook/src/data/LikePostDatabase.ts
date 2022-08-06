import { LikePost } from "../model/like";
import { PostLikeRepository } from "../repository/PostLikeRepository";
import { BaseDatabase } from "./BaseDatabese";


export class LikePostDatabase extends BaseDatabase implements PostLikeRepository{
    private static TABLENAME = "labook_likes";

  async getAthorId(): Promise<any> { 
        const authorId: string[] = []
        const result = await BaseDatabase.connection(LikePostDatabase.TABLENAME)
        .select("author_id")

        for(let author of result) {
            authorId.push(author)
        }
        return authorId;
  } 
   async addLike(like: LikePost): Promise<void> {
    try {
        const {id, postId, authorId} = like;
     
        await BaseDatabase.connection(LikePostDatabase.TABLENAME)
        .insert({
            id,
            post_id: postId,
            author_id: authorId
        })

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
      }
   }
}