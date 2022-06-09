import { Router } from "express";
import { CreateMainVirtualAccountController } from "@modules/virtualAccounts/useCases/createMainVirtualAccount/CreateMainVirtualAccountController";
import { ListVirtualAccountsController } from "@modules/virtualAccounts/useCases/listVirtualAccounts/ListVirtualAccountsController";
import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { ensureRenewSessionToken } from "@middleware/ensureRenewSessionToken";

const virtualAccountRoutes = Router();

const createMainVirtualAccountController = new CreateMainVirtualAccountController();
const listVirtualAccountsController = new ListVirtualAccountsController();

virtualAccountRoutes.post('/create-main-virtual-account', createMainVirtualAccountController.handle);

virtualAccountRoutes.use(ensureAuthenticated);
virtualAccountRoutes.use(ensureRenewSessionToken);
virtualAccountRoutes.get('/list-virtual-accounts', listVirtualAccountsController.handle);

export { virtualAccountRoutes };