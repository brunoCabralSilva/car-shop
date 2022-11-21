import express from 'express';
import Cars from './routes/Cars';

const app = express();

app.use(express.json());
app.use('/cars', Cars);

export default app;