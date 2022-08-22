import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export const userRouter = express.Router()

const userDataBase = new UserDatabase()
const hashManger = new HashManager()
const authenticator = new Authenticator()

const userBusiness = new UserBusiness(userDataBase, hashManger, authenticator )
const userController = new UserController(userBusiness)


userRouter.post("/sinup", (res, req) => userController.userSinup(res, req))
userRouter.post("/login", (res, req) => userController.userLogin(res, req))