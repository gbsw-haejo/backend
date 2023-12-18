import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: express.Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
import authRoute from './routes/authRoute';
import touristRoute from './routes/touristRoute';
import stampRoute from './routes/stampRoute';

// middlewares
import { errorHandler } from './middleware/errorMidleware';

app.use('/api/auth', authRoute);
app.use('/api/tourist', touristRoute);
app.use('/api/stamp', stampRoute);

app.use(errorHandler);

export default app;