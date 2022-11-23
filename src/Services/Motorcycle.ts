import MotorcycleModel from '../Models/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  model: MotorcycleModel;
  constructor() {
    this.model = new MotorcycleModel();
  }

  register = async (body: IMotorcycle) => {
    const registerMotorcycle = await this.model.register(body);
    let finalStatus = registerMotorcycle.status;
    if (!registerMotorcycle.status) {
      finalStatus = false;
    }
    return ({
      id: registerMotorcycle._id,
      model: registerMotorcycle.model,
      year: registerMotorcycle.year,
      color: registerMotorcycle.color,
      status: finalStatus,
      buyValue: registerMotorcycle.buyValue,
      category: registerMotorcycle.category,
      engineCapacity: registerMotorcycle.engineCapacity,
    });
  };

  getAll = async () => {
    const getAllCars = await this.model.getAll();
    if (getAllCars) {
      const arrayReturn = getAllCars.map((obj: any) => {
        const value = ({
          id: obj._id,
          model: obj.model,
          year: obj.year,
          color: obj.color,
          status: obj.status,
          buyValue: obj.buyValue,
          category: obj.category,
          engineCapacity: obj.engineCapacity,
        });
        return value;
      });
      return arrayReturn;
    }
    return getAllCars;
  };

  getById = async (id: string) => {
    const getCarById = await this.model.getById(id);
    if (getCarById) {
      return ({
        id: getCarById._id,
        model: getCarById.model,
        year: getCarById.year,
        color: getCarById.color,
        status: getCarById.status,
        buyValue: getCarById.buyValue,
        category: getCarById.category,
        engineCapacity: getCarById.engineCapacity,
      });
    }
    return getCarById;
  };

  updateMotocycle = async (obj: IMotorcycle) => {
    const update = await this.model.updateCar(obj, 'motorcycle');
    if (update) {
      const objeto = {
        id: update._id,
        model: update.model,
        year: update.year,
        color: update.color,
        status: update.status,
        buyValue: update.buyValue,
        category: update.category,
        engineCapacity: update.engineCapacity,
      };
      return objeto;
    }
    return update;
  };
}