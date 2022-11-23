import express from 'express';
import Cars from './routes/Cars';
import MotorCycles from './routes/Motorcycle';

const app = express();

app.use(express.json());
app.use('/cars', Cars);
app.use('/motorcycles', MotorCycles);

export default app;