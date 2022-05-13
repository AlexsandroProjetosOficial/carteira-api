import { Router } from "express";
import { systemRoutes } from "./system.routes";
import { userAccountsRoutes } from "./userAccounts.routes";

const routes = Router();

routes.use('/userAccounts', userAccountsRoutes);
routes.use('/systems', systemRoutes);

export { routes };