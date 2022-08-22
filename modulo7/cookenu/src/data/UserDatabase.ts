import { CustomError } from "../error/CustomError";
import { Iuser } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "Cookenu_User";

  public sinupUser = async (user: Iuser): Promise<void> => {
    try {
      await UserDatabase.connection.insert(user).into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(error.sqlMessage, 400);
    }
  };

  public findUserByEmail = async (email: string): Promise<Iuser> => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(error.sqlMessage, 400);
    }
  };
}
