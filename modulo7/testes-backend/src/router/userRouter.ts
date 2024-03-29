import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export const userRouter = express.Router();


const userDatabase = new UserDatabase();
const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const hashManager = new HashManager();

const userBusiness = new UserBusiness(userDatabase, idGenerator, authenticator,hashManager);
const userController = new UserController(userBusiness);

userRouter.get("/profile", userController.profile)
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
