import { Router } from "express";
import { AuthenticationController } from "@modules/systems/useCases/authentication/AuthenticationController";
import { ForgotPasswordController } from "@modules/systems/useCases/forgotPassword/ForgotPasswordController";
import { ResetPasswordController } from "@modules/systems/useCases/resetPassword/ResetPasswordController";
import { ensureValidateTokenResetPassword } from "@middleware/ensureValidateTokenResetPassword";

const systemRoutes = Router();

const authenticationController = new AuthenticationController();
const resetPasswordController = new ResetPasswordController();
const forgotPasswordControllert = new ForgotPasswordController();

systemRoutes.post('/login', authenticationController.handle);
systemRoutes.post('/forgot-password', forgotPasswordControllert.handle);
systemRoutes.patch('/reset-password', ensureValidateTokenResetPassword, resetPasswordController.handle);

export { systemRoutes };