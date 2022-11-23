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
    } return res.status(404).json({ message: 'Motorcycle not found' });
  };

  public updateMotocycle = async (req: Request, res: Response) : Promise<Response> => {
    if (req.params.id.length !== 24) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const obj = { id: req.params.id, ...req.body };
    const update = await this.service.updateMotocycle(obj);
    if (update) {
      return res.status(200).json(update);
    } return res.status(404).json({ message: 'Motorcycle not found' });
  };
}