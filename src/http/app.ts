import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import '@infra/shared/container'
import cors from 'cors';
import express from 'express';
import { ensureError } from '@middleware/ensureError';
import { routes } from './routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser(process.env.PRIVATE_KEY_COOKIES));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);
app.use(ensureError);

export { app };