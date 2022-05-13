import { CreateUserController } from "@modules/userAccounts/useCases/createUser/CreateUserController";
import { Router } from "express";

const userAccountsRoutes = Router();

const createUserController = new CreateUserController();

userAccountsRoutes.post('/create', createUserController.handle);

export { userAccountsRoutes };