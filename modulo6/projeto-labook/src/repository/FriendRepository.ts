import { friend } from "../model/friend";

export interface FriendRepository {
    friendId(): Promise<any>;
    createFriend(friend: friend): Promise<void>;
    getFriendId(id: string): Promise<any>;
    deleteFriend(id: string): Promise<void>;
}