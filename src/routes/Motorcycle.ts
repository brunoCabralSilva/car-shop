import express from 'express';
import MotorcycleController from '../Controllers/Motorcycle';

const router = express.Router();
const motorController = new MotorcycleController();

router.post('/', motorController.register);
router.get('/', motorController.getAll);
router.get('/:id', motorController.getById);
router.put('/:id', motorController.updateMotocycle);

export default router;
