import { Request, Response } from 'express';
import CarsService from '../Services/Cars';

export default class Cars {
  service: CarsService;

  constructor() {
    this.service = new CarsService();
  }

  public register = async (req: Request, res: Response): Promise<Response> => {
    const register = await this.service.register(req.body);
    return res.status(201).json(register);
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const getAllCars = await this.service.getAll();
    return res.status(200).json(getAllCars);
  };

  public getById = async (req: Request, res: Response) : Promise<Response> => {
    const { id } = req.params;
    if (id.length !== 24) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const getCarById = await this.service.getById(id);
    if (getCarById) {
      return res.status(200).json(getCarById);
    } return res.status(404).json({ message: 'Car not found' });
  };
}
