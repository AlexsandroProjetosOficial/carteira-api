import { Router } from "express";
import { creditCardRoutes } from "./creditCard.routes";
import { flagRoutes } from "./flag.routes";
import { systemRoutes } from "./system.routes";
import { userRoutes } from "./user.routes";
import { virtualAccountRoutes } from "./virtualAccount.routes";

const routes = Router();

routes.use('/virtual-accounts', virtualAccountRoutes);
routes.use('/systems', systemRoutes);
routes.use('/flags', flagRoutes);
routes.use('/credit-cards', creditCardRoutes);
routes.use('/users', userRoutes);

export { routes };