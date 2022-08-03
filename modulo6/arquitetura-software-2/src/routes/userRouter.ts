import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()


userRouter.get("/", userController.getAllController)
userRouter.post("/create", userController.create)

