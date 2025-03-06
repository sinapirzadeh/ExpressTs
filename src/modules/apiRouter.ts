import { Router } from 'express';

import userRouter from './user/userRouter';

const apiRouter = Router();

apiRouter.use('/users', userRouter);

export default apiRouter;
