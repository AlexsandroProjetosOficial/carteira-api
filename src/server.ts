import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// colar a routes aqui

// colocar a middleware que retorna o erro instalar o express-async-error

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server is running on port ${port}`));