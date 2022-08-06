
import { user } from "../model/user";
import { UserRepository } from "../repository/UserRepository";
import { BaseDatabase } from "./BaseDatabese";

export class UserDatabase extends BaseDatabase implements UserRepository {
  private static TABLENAME = "labook_users";

  async getFeedUser(id: string): Promise<any> {
    try {
      const result = await BaseDatabase.connection()
        .select(
          "labook_posts.id as post_id",
          "friend_id as fiendId",
          "photo",
          "description",
          "created_at"
        )
        .from("labook_posts")
        .leftOuterJoin("To_do_friends", function () {
          this.on("labook_posts.author_id", "=", "To_do_friends.author_id");
        })

        .where("To_do_friends.author_id", "=", id)
        .orderBy("created_at", "desc");

      return result;
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
}