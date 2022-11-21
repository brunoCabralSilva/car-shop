import express from 'express';
import CarsController from '../Controllers/Cars';

const router = express.Router();

const carsController = new CarsController();

router.post('/', carsController.register);

export default router;