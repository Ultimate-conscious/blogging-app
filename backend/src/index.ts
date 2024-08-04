import { Hono } from 'hono'
import { mainRouter } from './routes/index';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>()

app.use('/api/*',cors());

app.route('/api/v1',mainRouter);

export default app
