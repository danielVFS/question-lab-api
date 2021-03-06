import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import ErrorHandler from '@shared/errors/ErrorHandler';

import routes from '../routes/index';

import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ErrorHandler) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server running on port 3333 😈');
});
