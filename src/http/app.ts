import { config } from 'dotenv';
config();
import 'reflect-metadata';
import 'express-async-errors';
import '@infra/shared/container'
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { ensureError } from '@middleware/ensureError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);
app.use(ensureError);

export { app };