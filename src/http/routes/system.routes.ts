import { Router } from "express";
import { AuthenticationController } from "@modules/systems/useCases/authentication/AuthenticationController";

const systemRoutes = Router();

const authentication = new AuthenticationController();

systemRoutes.post('/login', authentication.handle);

export { systemRoutes };