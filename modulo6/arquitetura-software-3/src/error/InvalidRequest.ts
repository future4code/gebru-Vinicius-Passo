import { CustonError } from "./CustonError";

export class InvalidRequest extends CustonError {
    constructor(){
        super("Requisição invalida, um ou mais campos vazios", 400 )
    }
}