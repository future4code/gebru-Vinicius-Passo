import { v4 as generetId } from "uuid";
import { post, postCB } from "../@types/user";
import { PostDatabase } from "../data/PostDatabase";

export class PostBusiness {

  async getPost (id: string): Promise<any>  {
     if(!id){
        throw new Error("É necessario passar id")
     }
     const postDatabase = new PostDatabase()
  
    return await postDatabase.getPost(id) 
  } 
  
  async createPost(post: postCB ) {
    const { photo, description, type, authorId } = post;
    if (!photo || !description || !type  || !authorId) {
      throw new Error('"photo", "description","type", "createdAt", and "authorId" must be provided');
    }
    const id = generetId();

    const input: post = {
      id,
      photo,
      description,
      type,
      authorId
    };

    const postDatabase = new PostDatabase();
    await postDatabase.createPost(input);
  }
}
