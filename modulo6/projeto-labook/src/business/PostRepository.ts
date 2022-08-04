import { post } from "../model/user";


export interface PostRepository {
    getPost(id: string): Promise<post[]>;
    createPost(post: post): Promise<void>;
}