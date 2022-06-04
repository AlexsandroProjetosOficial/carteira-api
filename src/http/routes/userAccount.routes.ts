import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";
import { Router } from "express";

const userAccountRoutes = Router();

const createUserController = new CreateUserController();

userAccountRoutes.post('/create', createUserController.handle);

export { userAccountRoutes };