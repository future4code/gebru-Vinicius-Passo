import { friend } from "../model/friend";
import { user } from "../model/user";

export interface UserRepository {
    createFriend(friend: friend): Promise<void>;
    getFeedUser(id: string): Promise<any> ;
    getFriendId(id: string): Promise<any>;
    createUser(users: user): Promise<void>;
    deleteFriend(id: string): Promise<void>;
}