import { Router } from "express";
import { CreateFlagController } from "@modules/flags/useCases/createFlag/CreateFlagController";
import { ListAllFlagsController } from "@modules/flags/useCases/listAllFlags/ListAllFlagsController";
import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { ensureRenewSessionToken } from "@middleware/ensureRenewSessionToken";

const flagRoutes = Router();

const createFlagController = new CreateFlagController();
const listAllFlagsController = new ListAllFlagsController();

flagRoutes.use(ensureAuthenticated);
flagRoutes.use(ensureRenewSessionToken);
flagRoutes.post('/create-flag', createFlagController.handle);
flagRoutes.get('/list-flags', listAllFlagsController.handle);

export { flagRoutes };