import { Hono } from 'hono'
import { mainRouter } from './routes/index';

const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>()

app.route('/api/v1',mainRouter);

export default app
