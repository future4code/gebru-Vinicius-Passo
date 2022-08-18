import { CustonError } from "./CustonError";

export class InavlidId extends CustonError {
    constructor(){
    super("É necessario passar id", 404)
    }
}