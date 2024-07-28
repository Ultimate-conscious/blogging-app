import { Hono } from 'hono'
import { mainRouter } from './routes';

const app = new Hono()

app.route('/',mainRouter);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
