import { Router } from "express";
import { userAccountsRoutes } from "./userAccounts.routes";

const routes = Router();

routes.use('/userAccounts', userAccountsRoutes);

export { routes };