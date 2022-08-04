import { CustonError } from "./CustonError";

export class InvalidRequest extends CustonError {
    constructor(){
        super("Requisição inválida, um ou mais campo vazio", 400)
    }
}