import CarsModel from '../Models/Cars';
import ICar from '../Interfaces/ICar';

export default class Cars {
  model: CarsModel;
  constructor() {
    this.model = new CarsModel();
  }

  register = async (body: ICar) => {
    const registerCar = await this.model.register(body);
    return registerCar;
  };

  getAll = async () => {
    const getAllCars = await this.model.getAll();
    return getAllCars;
  };

  getById = async (id: string) => {
    const getCarById = await this.model.getById(id);
    return getCarById;
  };

  updateCar = async (obj: ICar) => {
    const update = await this.model.updateCar(obj);
    return update;
  };
}