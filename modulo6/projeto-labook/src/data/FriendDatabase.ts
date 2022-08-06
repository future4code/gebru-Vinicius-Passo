
import { friend } from "../model/friend";
import { FriendRepository } from "../repository/FriendRepository";
import { BaseDatabase } from "./BaseDatabese";


export class FriendDatabase extends BaseDatabase implements FriendRepository {
  private static TABLENAME2 = "To_do_friends";


  async friendId(): Promise<any> {
    try {
      const friendId: string[] = [];
      const result: string[] = await BaseDatabase.connection()
        .select("friend_id")
        .from(FriendDatabase.TABLENAME2);

      for (let friend of result) {
        friendId.push(friend);
      }
      return result; 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  // para pegar verificar se existe um id do amigo ja é existe

  async getFriendId(id: string): Promise<{}> {
    try {
      const friendId: string[] = [];
      const result: string[] = await BaseDatabase.connection()
        .select("friend_id")
        .where({ id })
        .from(FriendDatabase.TABLENAME2);

      for (let friend of result) {
        friendId.push(friend);
      }
      return result; 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async createFriend(friend: friend) {
    try {
      await BaseDatabase.connection()
        .insert({
          id: friend.id,
          author_id: friend.authorId,
          friend_id: friend.friendId,
        })
        .into(FriendDatabase.TABLENAME2);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async deleteFriend(id: string) {
    try {
      await BaseDatabase.connection()
        .delete()
        .where({ id })
        .from(FriendDatabase.TABLENAME2);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}