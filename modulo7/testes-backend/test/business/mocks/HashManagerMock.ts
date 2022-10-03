import { IHashGenerator } from "../../../src/ports/userPorts";


export class HashManagerMock implements IHashGenerator {
   async generateHash(str: string): Promise<string> {
     return "hashManagerMock"
    }
   async compareHash(str: string, hash: string): Promise<boolean> {
        return str === hash
    }
    
}