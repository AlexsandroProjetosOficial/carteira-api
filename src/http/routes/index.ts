import { ensureRenewSessionToken } from "@middleware/ensureRenewSessionToken";
import { Router } from "express";
import { flagRoutes } from "./flag.routes";
import { systemRoutes } from "./system.routes";
import { userAccountsRoutes } from "./userAccounts.routes";

const routes = Router();

routes.use(ensureRenewSessionToken);
routes.use('/userAccounts', userAccountsRoutes);
routes.use('/systems', systemRoutes);
routes.use('/flags', flagRoutes);

export { routes };