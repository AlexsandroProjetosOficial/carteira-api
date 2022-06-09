import { Router } from "express";
import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { ensureRenewSessionToken } from "@middleware/ensureRenewSessionToken";
import { CreateUserController } from "@modules/users/createUser/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.use(ensureAuthenticated);
userRoutes.use(ensureRenewSessionToken);
userRoutes.post('/create-user', createUserController.handle);

export { userRoutes }