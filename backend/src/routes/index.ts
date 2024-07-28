import { Hono }from 'hono';
import { userRouter } from './userRouter';
import { blogRouter } from './blogRouter';

const mainRouter = new Hono().basePath('/api/v1')


mainRouter.route('/',userRouter);
mainRouter.route('/',blogRouter);

export  {
    mainRouter
}