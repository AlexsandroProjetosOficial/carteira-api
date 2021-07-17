import { Router } from 'express';
import { AuthenticateUserController } from './controllers/authentication/AuthenticateUserController';
import { VerificationTokenUserController } from './controllers/authentication/VerificationTokenUserController';
import { CreateCityController } from './controllers/cities/CreateCityController';
import { ListCitiesByIdStateIbgeController } from './controllers/cities/ListCitiesByIdStateIbgeController';
import { CreateStateController } from './controllers/states/CreateStateController';
import { ListStatesController } from './controllers/states/ListStatesController';
import { CreateUserController } from './controllers/users/CreateUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { ensureLogging } from './middleware/ensureLogging';

const router = Router();

const createUserController = new CreateUserController();

const authenticateUserController = new AuthenticateUserController();
const verificationTokenUserController = new VerificationTokenUserController();

const createCityController = new CreateCityController();
const listCityByIdStateIbgeController = new ListCitiesByIdStateIbgeController();

const createStateController = new CreateStateController();
const listStatesController = new ListStatesController();

router.post('/users', ensureLogging, createUserController.handle);

router.post('/login', ensureLogging, authenticateUserController.handle);
router.get('/verification/token/:token', ensureAuthenticated, ensureLogging, verificationTokenUserController.handle);

router.post('/cities', ensureAuthenticated, ensureLogging, createCityController.handle);
router.get('/cities/:id_state_ibge', ensureAuthenticated, ensureLogging, listCityByIdStateIbgeController.handle);

router.post('/states', ensureAuthenticated, ensureLogging, createStateController.handle);
router.get('/states', ensureAuthenticated, ensureLogging, listStatesController.handle);

export { router };
