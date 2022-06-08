import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { ensureRenewSessionToken } from "@middleware/ensureRenewSessionToken";
import { CreateCreditCardController } from "@modules/creditCards/useCases/createCreditCard/CreateCreditCardController";
import { ListAllCreditCardsController } from "@modules/creditCards/useCases/listAllCreditCards/ListAllCreditCardsController";
import { Router } from "express";

const creditCardRoutes = Router();

const createCreditCardController = new CreateCreditCardController();
const listAllCreditCardsController = new ListAllCreditCardsController();

creditCardRoutes.use(ensureAuthenticated);
creditCardRoutes.use(ensureRenewSessionToken);
creditCardRoutes.post('/create-credit-card', createCreditCardController.handle);
creditCardRoutes.get('/list-credit-cards/:virtualAccountId', listAllCreditCardsController.handle);

export { creditCardRoutes}