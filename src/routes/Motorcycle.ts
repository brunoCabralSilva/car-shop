import express from 'express';
import MotorcycleController from '../Controllers/Motorcycle';

const router = express.Router();
const motorController = new MotorcycleController();

router.post('/', motorController.register);
// router.get('/', carsController.getAll);
// router.get('/:id', carsController.getById);
// router.put('/:id', carsController.updateCar);

export default router;
