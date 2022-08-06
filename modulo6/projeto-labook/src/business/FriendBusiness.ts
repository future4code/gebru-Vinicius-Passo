import { InvalidRequest } from "../error/InvalidRequest";
import { v4 as generetId } from "uuid";
import { friend, friendDTO } from "../model/friend";
import { InavlidId } from "../error/InvalidId";
import { CustonError } from "../error/CustonError";
import { FriendRepository } from "../repository/FriendRepository";

export class FriendBusiness {
    constructor(private friendDatabase: FriendRepository) {}
   
    async createFriendBusiness(friend: friendDTO) {
        const { authorId, friendId } = friend;
    
        if (!authorId || !friendId) {
          throw new InvalidRequest();
        }
        const id = generetId();
    
        const friends: friend = {
          id,
          authorId,
          friendId,
        };

        const friendIdDatabase = await this.friendDatabase.friendId()
        if(friendIdDatabase.length > 0)

        if(friendIdDatabase[0].friend_id === friends.friendId) {
          throw new CustonError("você já é amigo dessa pessoa!", 404)
        }
        
        await this.friendDatabase.createFriend(friends);
      }

      async deleteFriend(id: string) {
        if (!id) {
          throw new InavlidId();
        }
    
        const idFriend = await this.friendDatabase.getFriendId(id);
        console.log(idFriend)
        if (!idFriend[0]) {
          throw new CustonError(
            "Sem registro de amizade, só é possivél deleter amizade que existe",
            404
          );
        }
     
    
        await this.friendDatabase.deleteFriend(id);
      }
}