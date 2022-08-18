import { v4 as generetId } from "uuid";
import { post, postDTO, POST_TYPES } from "../model/user";
import { InavlidId } from "../error/InvalidId";
import { InvalidRequest } from "../error/InvalidRequest";
import { PostRepository } from "../repository/PostRepository";
import { CustonError } from "../error/CustonError";

export class PostBusiness {
  constructor(private postDatabase: PostRepository) {}
  
 async getPostType(type: POST_TYPES): Promise<any>  {
    if(!type) {
      throw new CustonError("É necessário passar o type do post", 400)
    }
    const postType = await this.postDatabase.getPostType(type)

    if(!postType[0]) {
      throw new CustonError("Type inválido, o type tem que ser 'normal', ou 'event'", 400)
    }

    return await this.postDatabase.getPostType(type)
 }
  async getPost(id: string): Promise<any> {
    if (!id) {
      throw new InavlidId();
    }

    const getPost = await this.postDatabase.getPost(id);

    if(!getPost[0]) {
      throw new CustonError("id não encontrado", 404)
    }

    return await this.postDatabase.getPost(id);
  }

  async createPost(post: postDTO) {
    const { photo, description, type, authorId } = post;
    if (!photo || !description || !type || !authorId) {
      throw new InvalidRequest();
    }

    const id = generetId();

    const input: post = {
      id,
      photo,
      description,
      type,
      authorId,
    };

    await this.postDatabase.createPost(input);
  }
}
