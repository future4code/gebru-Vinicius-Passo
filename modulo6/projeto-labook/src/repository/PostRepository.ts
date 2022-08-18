import { post, POST_TYPES } from "../model/user";


export interface PostRepository {
    getPost(id: string): Promise<post[]>;
    createPost(post: post): Promise<void>;
    getPostType(type: POST_TYPES): Promise<post[]>;
}