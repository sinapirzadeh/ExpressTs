import { Router } from 'express';
import modelValidation from 'middlewares/modelValidationMid';

import * as userController from './userController';
import userValidation from './userValidation';

const app = Router();

app.get('/', userController.getUsers);

app.post('/', modelValidation, userValidation(), userController.createUser);

export default app;
