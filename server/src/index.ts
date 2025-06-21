import { Hono } from 'hono'
import { userRoute } from './routes/users'
import { cycleRoute } from './routes/cycle'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables:{
	userId: any;
	}
}>();

app.use('/*', cors());


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1/user',userRoute);
app.route('/api/v1/cycle',cycleRoute);

export default app
