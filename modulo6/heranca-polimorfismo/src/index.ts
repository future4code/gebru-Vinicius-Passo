import { Client } from "./clients"
import { Commerce, Place, Residence } from "./Classs"

// -------------- 1
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }
  public interoduceYourself(): string {
    return `sou ${this.name}. Bom dia!`
  }
}
const user = new User("4343-522", "vinicius@gmail.com", "vinicius", "vini123")
//   console.log(user.getId())
//   console.log(user.getName())
//   console.log(user.getEmail())


//  ------------- 2

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer = new Customer("22-336", "vitor@gmail.com", "vitor", "456", "44-55-77")
// console.log(customer.getId())
// console.log(customer.getName())
// console.log(customer.getEmail())
// console.log(customer.getCreditCard())
// console.log(customer.interoduceYourself())


// --------------------- Polimorfismo ----------------

const client: Client = {
  name: "Benjamin",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }
  public getCpf(): string {
   return this.cpf;
  }
  public calculateBill(): number {
   return this.consumedEnergy * 0.75
  }
}

const residentialClient = new ResidentialClient("caila", 80, 95, "556-877-968-67", 5, "44220-000")

// console.log(residentialClient.calculateBill())

class CommercialClient extends Commerce implements Client{
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }
  calculateBill(): number {
   return this.registrationNumber * 0,53;
  }
  getCnpj(): string {
    return this.cnpj
  }
}
const commercialClient = new CommercialClient("Rosivaldo", 78, 58, "110-25541-0000", 83, "65870-000")
console.log(commercialClient.calculateBill())