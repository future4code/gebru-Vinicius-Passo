import { pagination, user, userDTO } from "../model/user";
import { v4 as generetId } from "uuid";
import { InvalidRequest } from "../error/InvalidRequest";
import { InavlidId } from "../error/InvalidId";
import { CustonError } from "../error/CustonError";
import { UserRepository } from "../repository/UserRepository";


export class UserBusiness {
  constructor(private userDatabase: UserRepository) { }
  async getFeadUserBusiness(paginations: pagination) {
    if (!paginations.id) {
      throw new InavlidId();
    }

    if(isNaN(paginations.size) || paginations.size < 1) {
      paginations.size = 5
    }

    if(isNaN(paginations.page) || paginations.page < 1) {
      paginations.page = 1
    }

    const feed = await this.userDatabase.getFeedUser(paginations);
    if (!feed[0]) {
      throw new CustonError("Sem publicação!", 400);
    }
    return await this.userDatabase.getFeedUser(paginations);
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
