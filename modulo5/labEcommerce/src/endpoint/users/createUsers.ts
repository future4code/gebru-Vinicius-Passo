import {Request, Response} from "express"
import {insertUsers} from "../../data/insertUsers"
import { v4 as generateId } from 'uuid';

export const createUsers = async (req: Request, res: Response ) => {
    let errorCode = 500
    try {
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.password
        ) {
            errorCode = 404
            throw new Error('"name", "email" and "password" are mandatory')
        }

        const id = generateId()
        await insertUsers(
            id,
            req.body.name,
            req.body.email,
            req.body.password
        )

        res.status(201).send("users create successfully")

    } catch (error : any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
} 