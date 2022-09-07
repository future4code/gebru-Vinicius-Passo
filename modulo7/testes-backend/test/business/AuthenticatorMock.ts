import { AuthenticationData } from "../../src/model/type";
import { USER_ROLES } from "../../src/model/user";
import { IAuthenticator } from "../../src/ports/userPorts";

export class AuthenticatorMock implements IAuthenticator{
    generateToken(peload: AuthenticationData): string {
       return "token"
    }
    getTokenData(token: string): AuthenticationData {
        return {id: "id", role: USER_ROLES.NORMAL}
    }

}