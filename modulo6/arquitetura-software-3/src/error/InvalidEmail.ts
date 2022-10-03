import { CustonError } from "./CustonError";

export class InvalidEmail extends CustonError {
    constructor() {
        super("Email inválido!", 406)
    }
}