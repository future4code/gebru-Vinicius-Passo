import { user, userCB } from "../@types/user";
import { v4 as generetId } from "uuid";
import { UserDatabase } from "../data/UserDatabase";
import { friend, friendCB } from "../@types/friend";

export class UserBusiness {
  async createFriendBusiness(friend: friendCB) {
    const { authorId, friendId } = friend;

    if (!authorId || !friendId) {
      throw new Error("É necessário passar 'authorId' e 'friendId'");
    }
    const id = generetId();

    const friends: friend = {
      id,
      authorId,
      friendId,
    };
    const userDatabase = new UserDatabase();
    await userDatabase.createFriend(friends);
  }
  async createUser(user: userCB) {
    const { name, email, password } = user;
    if (!name || !email || !password) {
      throw new Error('"name", "email" and "password" must be provided');
    }
    const id = generetId();

    const input: user = {
      id,
      name,
      email,
      password,
    };

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(input);
  }
}
