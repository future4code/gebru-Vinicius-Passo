import { LikePost } from "../model/like";

export interface PostLikeRepository {
    addLike(like: LikePost): Promise<void>;
    getAthorId (): Promise<any>;
}