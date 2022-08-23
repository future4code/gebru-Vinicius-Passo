import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/CustonError";
import { AuthenticationData } from "../model/type";


export class Authenticator {
    generateToken = (peload: AuthenticationData): string => {
        const token = jwt.sign(peload, process.env.JWT_KEY as string, {
            expiresIn: process.env.JWT_DURATION 
        }) 
        return token;
    }

    getTokenData = (token: string): AuthenticationData => {
        try {
            const result = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as AuthenticationData

            return result;
            
        } catch (error: any) {
            console.log(error.message)
            throw new Unauthorized();
        }
    }
}