import { AuthenticationData } from "../model/type";

export interface IHashGenerator {
    generateHash(str: string): Promise <string>
    compareHash(str: string, hash: string): Promise<boolean>
}

export interface IIDGenerator {
    generateId(): string 
}

export interface IAuthenticator {
    generateToken(peload: AuthenticationData): string 
    getTokenData(token: string): AuthenticationData 
}