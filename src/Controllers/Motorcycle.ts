import { Request, Response } from 'express';
import MotorcycleService from '../Services/Motorcycle';

export default class Motorcycle {
  service: MotorcycleService;

  constructor() {
    this.service = new MotorcycleService();
  }

  public register = async (req: Request, res: Response): Promise<Response> => {
    const register = await this.service.register(req.body);
    return res.status(201).json(register);
  };
}