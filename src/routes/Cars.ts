import express from 'express';
import CarsController from '../Controllers/Cars';

const router = express.Router();
const carsController = new CarsController();

router.post('/', carsController.register);
router.get('/', carsController.getAll);
router.get('/:id', carsController.getById);
router.put('/:id', carsController.updateCar);

export default router;
