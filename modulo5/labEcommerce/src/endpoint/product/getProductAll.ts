import {Request, Response} from "express";
import { productAll } from "../../data/productAll";


export const getProductAll = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
      const user = await productAll() 
        res.status(200).send(user)

    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }
} 