import { Router } from "express";
import { CreateFlagController } from "@modules/flags/useCases/createFlag/CreateFlagController";
import { ListAllFlagsController } from "@modules/flags/useCases/listAllFlags/ListAllFlagsController";
import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { ensureRenewSessionToken } from "@middleware/ensureRenewSessionToken";

const flagRoutes = Router();

const createFlagController = new CreateFlagController();
const listAllFlagsController = new ListAllFlagsController();

flagRoutes.use(ensureAuthenticated);
flagRoutes.post('/create', createFlagController.handle);
flagRoutes.get('/listAllFlags', listAllFlagsController.handle);

export { flagRoutes };