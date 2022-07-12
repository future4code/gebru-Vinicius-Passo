
class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        this.description = description,
            this.value = value,
            this.date = date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf = (): string => {
        return this.cpf
    }

    public setCfp = (newCpf: string): string => {
        return this.cpf = newCpf
    }
}

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

}
const userVinicius = new UserAccount("455-988-784-96", "vinicius duarete", 25)
const userBenjamin = new UserAccount("348-896-674-46", "vitor duarete", 21)

userBenjamin.setCfp("348-896-674-35")

console.log(userBenjamin)
console.log(userBenjamin.getCpf())



// EXERCICIO 1
// A) Um construtor serve para instanciar objetos da classe na qual esse construtor foi
// definido, para chama-lo const cachorroDoPh = new Dog("Cacau", 7, 8)

// B) Dando um console  na instancia da classe UserAccount so aparece Chamando o construtor
//    da classe UserAccount

// C) Para acessar um classe privada, so podem ser acessados apenas pelas
//    funções dentro da classe

// EXERCICIO EXTRA


import { app } from "./app"
import { Request, Response } from "express";
import { UserData } from "./Data/UserData";

app.get("/user", async (req: Request, res: Response) => {
   try {
    const userDB = new UserData()
    const result = await userDB.getAll()
    res.status(200).send(result)
   } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
   }
})


