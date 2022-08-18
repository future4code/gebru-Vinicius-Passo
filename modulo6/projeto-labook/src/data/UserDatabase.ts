
import { pagination, user } from "../model/user";
import { UserRepository } from "../repository/UserRepository";
import { BaseDatabase } from "./BaseDatabese";

export class UserDatabase extends BaseDatabase implements UserRepository {
  private static TABLENAME = "labook_users";

  async getFeedUser( pagination:pagination ): Promise<any> {
    let ofFset = pagination.size * ( pagination.page - 1)
    try {
      const result = await BaseDatabase.connection()
        .from("labook_posts")
        .select( "*" )
        .join("To_do_friends", function() {
          this. 
          on("To_do_friends.friend_id", "=", "labook_posts.author_id")
        })
        .where("To_do_friends.author_id", "=", pagination.id)
        .orderBy("created_at", "desc")
        .limit(pagination.size)
        .offset(ofFset)

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