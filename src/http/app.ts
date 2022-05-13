import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import '@infra/shared/container'
import cors from 'cors';
import express from 'express';
import { ensureError } from '@middleware/ensureError';
import { routes } from './routes';

import swaggerFile from '../swagger.json';
import swaggerUI from 'swagger-ui-express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/api/v1', routes);
app.use(ensureError);

export { app };