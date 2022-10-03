import {v4} from "uuid";
import { IIDGenerator } from "../ports/userPorts";

export class IdGenerator implements IIDGenerator {
    generateId = (): string => {
        return v4();
    };
};