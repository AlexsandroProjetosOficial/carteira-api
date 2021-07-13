import { Router } from 'express';
import { CreateCityController } from './controllers/cities/CreateCityController';
import { ListCitiesByIdStateIbgeController } from './controllers/cities/ListCitiesByIdStateIbgeController';
import { CreateStateController } from './controllers/states/CreateStateController';
import { ListStatesController } from './controllers/states/ListStatesController';
import { CreateUserController } from './controllers/users/CreateUserController';

const router = Router();

const createUserController = new CreateUserController();

const createCityController = new CreateCityController();
const listCityByIdStateIbgeController = new ListCitiesByIdStateIbgeController();

const createStateController = new CreateStateController();
const listStatesController = new ListStatesController();

router.post('/users', createUserController.handle);

router.post('/cities', createCityController.handle);
router.get('/cities/:id_state_ibge', listCityByIdStateIbgeController.handle);

router.post('/states', createStateController.handle);
router.get('/states', listStatesController.handle);

export { router };
