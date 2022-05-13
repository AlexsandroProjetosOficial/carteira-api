import { Router } from "express";
import { AuthenticationController } from "@modules/systems/useCases/authentication/AuthenticationController";
import { ChangePasswordController } from "@modules/systems/useCases/changePassword/ChangePasswordController";

const systemRoutes = Router();

const authenticationController = new AuthenticationController();
const changePasswordController = new ChangePasswordController();

systemRoutes.post('/login', authenticationController.handle);
systemRoutes.patch('/changePassword', changePasswordController.handle);

export { systemRoutes };