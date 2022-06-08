import { Router } from "express";
import { CreateMainVirtualAccountController } from "@modules/virtualAccounts/useCases/createMainVirtualAccount/CreateMainVirtualAccountController";

const virtualAccountRoutes = Router();

const createMainVirtualAccountController = new CreateMainVirtualAccountController();

virtualAccountRoutes.post('/create-main-virtual-account', createMainVirtualAccountController.handle);

export { virtualAccountRoutes };