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
}