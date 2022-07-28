// import { Request, Response } from "express"
import { app } from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.get("/user", userController.getUserController)
app.post('/user', userController.createUser)
app.delete("/user/:id", userController.deleteUserController)

// app.post('/task', createTask)


