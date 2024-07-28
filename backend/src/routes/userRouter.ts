import { Hono }from 'hono';
import { use } from 'hono/jsx';

const userRouter = new Hono().basePath('/user')

userRouter.post('/signin',c => c.text("Signin"));

userRouter.post('/signup',c => c.text("Signup"));

export  {
    userRouter
}