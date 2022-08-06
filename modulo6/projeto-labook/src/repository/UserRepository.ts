import { user } from "../model/user";

export interface UserRepository {
    getFeedUser(id: string): Promise<any> ;
    createUser(users: user): Promise<void>;
}