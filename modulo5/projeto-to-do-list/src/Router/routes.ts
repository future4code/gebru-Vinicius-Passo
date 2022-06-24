import { Router } from 'express';
import { createTodoListUsersControllers, readTodoListUsersControllers } from '../Controllers/todoListUser-controllers';

export const router = Router();

router.get("/todoLists/:id/User", readTodoListUsersControllers)
router.post("/todoListUsers/create", createTodoListUsersControllers)