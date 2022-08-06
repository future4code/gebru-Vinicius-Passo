import { PostRepository } from "../repository/PostRepository";
import { post, POST_TYPES } from "../model/user";
import { BaseDatabase } from "./BaseDatabese";

export class PostDatabase extends BaseDatabase implements PostRepository{
  private static TABLENAME = "labook_posts";

 async getPostType(type: POST_TYPES): Promise<post[]> {
  try {
    const result: post[] = await BaseDatabase.connection(PostDatabase.TABLENAME)
    .select("*")
    .where({type})
    .orderBy("created_at", "desc")
    return result

  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
 }

  async getPost(id: string): Promise<post[]> {
    try {
      const post: post[] = [];
      const result = await BaseDatabase.connection(PostDatabase.TABLENAME)
        .select("*")
        .where({ id });
      for (let item of result) {
        post.push(item);
      }
  
      return post;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  async createPost(post: post): Promise<void> {
    try {
      await BaseDatabase.connection()
      .insert({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        author_id: post.authorId
      })
      .into(PostDatabase.TABLENAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
