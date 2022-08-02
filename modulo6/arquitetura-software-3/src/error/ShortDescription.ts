import { CustonError } from "./CustonError";

export class ShortDescription extends CustonError {
    constructor() {
        super("Description inválido, precisa ter no mínimo 16 caracteres", 406)
    }
}