import {Request, Response} from "express"
import { usersAll } from "../../data/usersAll"

export const getUsersAll = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
      const user = await usersAll()  
        res.status(200).send(user)

    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }
} 