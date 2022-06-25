import { Router } from 'express';
import {
     createTodoListUsersControllers,
      readTodoListUsersControllers, 
      updateTodoLIstUsersControllers 
} 
     from '../Controllers/todoListUser-controllers';

export const router = Router();


router.get("/todoLists/:id/User", readTodoListUsersControllers)
router.post("/todoListUsers/create", createTodoListUsersControllers)
router.put("/todoListsUser/:id/update", updateTodoLIstUsersControllers)