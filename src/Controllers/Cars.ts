import { Request, Response } from 'express';
import CarsService from '../Services/Cars';

export default class Cars {
  service: CarsService;

  constructor() {
    this.service = new CarsService();
  }

  register = async (req: Request, res: Response): Promise<Response> => {
    const register = await this.service.register(req.body);
    return res.status(201).json(register);
  };
}
