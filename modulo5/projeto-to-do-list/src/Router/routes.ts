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
router.get("/todoLists/:id/User", readTodoListUsersControllers)
router.get("/todoLists/:id/task", readTodoListUserTaskControllers)
router.post("/todoListUsers/create", createTodoListUsersControllers)
router.post("/todoLists/task", createTodoListTaskControllers)
router.put("/todoListsUser/:id/update", updateTodoLIstUsersControllers)