import { IIDGenerator } from "../../../src/ports/userPorts";


export class IdGeneratorMock implements IIDGenerator {
    generateId(): string {
       return "id"
    }
}