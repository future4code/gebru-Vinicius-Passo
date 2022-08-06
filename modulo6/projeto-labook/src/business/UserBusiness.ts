import { user, userDTO } from "../model/user";
import { v4 as generetId } from "uuid";
import { InvalidRequest } from "../error/InvalidRequest";
import { InavlidId } from "../error/InvalidId";
import { CustonError } from "../error/CustonError";
import { UserRepository } from "../repository/UserRepository";


export class UserBusiness {
  constructor(private userDatabase: UserRepository) { }
  async getFeadUserBusiness(id: string) {
    if (!id) {
      throw new InavlidId();
    }

    const feed = await this.userDatabase.getFeedUser(id);
    if (!feed[0]) {
      throw new CustonError("Sem publicação!", 400);
    }
    return await this.userDatabase.getFeedUser(id);
  }

  async createUser(user: userDTO) {
    const { name, email, password } = user;
    if (!name || !email || !password) {
      throw new InvalidRequest();
    }

    const id = generetId();

    const input: user = {
      id,
      name,
      email,
      password,
    };

    await this.userDatabase.createUser(input);
  }
}
