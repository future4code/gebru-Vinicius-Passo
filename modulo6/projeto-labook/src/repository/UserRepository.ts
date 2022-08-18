import { pagination, user } from "../model/user";

export interface UserRepository {
    getFeedUser(pagination:pagination): Promise<any> ;
    createUser(users: user): Promise<void>;
}