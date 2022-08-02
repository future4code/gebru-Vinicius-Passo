import { friend } from "../@types/friend";
import { user } from "../@types/user";
import { BaseDatabase } from "./BaseDatabese";

export class UserDatabase extends BaseDatabase {
  private static TABLENAME = "labook_users";
  private static TABLENAME2 = "To_do_friends";

 async createFriend(friend: friend) {
    try {
      await BaseDatabase.connection()
      .insert({
        id: friend.id,
        author_id: friend.authorId,
        friend_id: friend.friendId
      })
      .into(UserDatabase.TABLENAME2)
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
 }
  async createUser(users: user): Promise<void> {
    try {
      await BaseDatabase.connection()
        .insert({
          id: users.id,
          name: users.name,
          email: users.email,
          password: users.password,
        })
        .into(UserDatabase.TABLENAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
 async deleteFriend(id: string) {
  try {
    await BaseDatabase.connection()
    .delete()
    .where({id})
    .from(UserDatabase.TABLENAME2)
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
 }
}
