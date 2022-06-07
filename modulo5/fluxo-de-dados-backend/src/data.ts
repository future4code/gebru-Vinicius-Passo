import { v4 as generateId } from 'uuid';

type Product = {
    id: string,
    name: string,
    price: number
}

export const produtos:Product[] = [
    {
        id:generateId(),
        name:"vinicius",
        price: 55
    }
]