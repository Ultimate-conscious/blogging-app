import { Hono }from 'hono';
import { userRouter } from './userRouter';
import { blogRouter } from './blogRouter';

const mainRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
  }>()


mainRouter.route('/user',userRouter);
mainRouter.route('/blog',blogRouter);

export  {
    mainRouter
}