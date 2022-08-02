import { post } from "../@types/user";
import { BaseDatabase } from "./BaseDatabese";

export class PostDatabase extends BaseDatabase {
  private static TABLENAME = "labook_posts";

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
