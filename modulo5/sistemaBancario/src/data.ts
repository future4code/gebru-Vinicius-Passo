import { v4 as generateId } from 'uuid';

type Cont = 
    {
        id: string,
        name: string,
        cpf: string,
        dataNascimento: string,
        saldo: number,
        extrato: [{valor: number, data: string}]
    }


export const contaUsuario : Cont[] = [
    {
    id: generateId(),
    name: "vinicius",
    cpf: "48836585225",
    dataNascimento: "21/10/1999",
    saldo: 0.00,
    extrato: [{valor: 0.00, data: ""}]
},
    {
    id: generateId(),
    name: "vitor",
    cpf: "68832585335",
    dataNascimento: "17/06/2003",
    saldo: 0.00,
    extrato: [{valor: 0.00, data: ""}]
}
]

