import { Router } from "express";
import { creditCardRoutes } from "./creditCard.routes";
import { flagRoutes } from "./flag.routes";
import { systemRoutes } from "./system.routes";
import { userAccountRoutes } from "./userAccount.routes";

const routes = Router();

routes.use('/userAccounts', userAccountRoutes);
routes.use('/systems', systemRoutes);
routes.use('/flags', flagRoutes);
routes.use('/creditCards', creditCardRoutes);

export { routes };