import { v4 as generetId } from "uuid";
import { post, postDTO } from "../model/user";
import { InavlidId } from "../error/InvalidId";
import { InvalidRequest } from "../error/InvalidRequest";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
  constructor(private postDatabase: PostRepository) {}
  
  async getPost(id: string): Promise<any> {
    if (!id) {
      throw new InavlidId();
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
