import { Router } from 'express';
import {
     createTodoListTaskControllers,
     createTodoListUsersControllers,
      readTodoListAllControllers,
      readTodoListUsersControllers, 
      readTodoListUserTaskControllers, 
      updateTodoLIstUsersControllers 
} 
     from '../Controllers/todoListUser-controllers';

export const router = Router();

router.get("/todoLists/all", readTodoListAllControllers)
router.get("/todoLists/task", readTodoListUserTaskControllers)
router.get("/todoLists/:id/User", readTodoListUsersControllers)
router.post("/todoListUsers/create", createTodoListUsersControllers)
router.post("/todoLists/task", createTodoListTaskControllers)
router.put("/todoListsUser/:id/update", updateTodoLIstUsersControllers)