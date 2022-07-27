import { UserDatabase } from "../data/UserDatabase";
import { User } from "../types/user";

export class UserBusiness {
  async getUsersBusiness(): Promise<User[]> {
    return await new UserDatabase().getUserDatabase();
  }

  createUser = async (input: User): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error('Preencha os campos "name", "email", "password"  ');
      }
      const id: string = Date.now().toString();
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  async deleteUserBusiness(input: { id: string }) {
    if (!input.id) {
      throw new Error("Insira um id!");
    }

    return await new UserDatabase().deleteUserDatebase(input.id);
  }
}
