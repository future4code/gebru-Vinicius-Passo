import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.get("/feed/:id", (req, res) => userController.feadController(req, res))
userRouter.post("/friend/:authorId",(req, res) => userController.createFriendController(req, res))
userRouter.post("/",(req, res) => userController.createUserControler(req, res))
userRouter.delete("/deleteFriend/:id",(req, res) => userController.deleteFriendController(req, res))