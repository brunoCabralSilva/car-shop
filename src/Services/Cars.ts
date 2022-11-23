import CarsModel from '../Models/Cars';
import ICar from '../Interfaces/ICar';

export default class Cars {
  model: CarsModel;
  constructor() {
    this.model = new CarsModel();
  }

  register = async (body: ICar) => {
    const registerCar = await this.model.register(body);
    let finalStatus = registerCar.status;
    if (!registerCar.status) {
      finalStatus = false;
    }
    return ({
      id: registerCar._id,
      model: registerCar.model,
      year: registerCar.year,
      color: registerCar.color,
      status: finalStatus,
      buyValue: registerCar.buyValue,
      doorsQty: registerCar.doorsQty,
      seatsQty: registerCar.seatsQty,
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
          doorsQty: obj.doorsQty,
          seatsQty: obj.seatsQty,
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
        doorsQty: getCarById.doorsQty,
        seatsQty: getCarById.seatsQty,
      });
    }
    return getCarById;
  };

  updateCar = async (obj: ICar) => {
    const update = await this.model.updateCar(obj, 'car');
    if (update) {
      const objeto = {
        id: update._id,
        model: update.model,
        year: update.year,
        color: update.color,
        status: update.status,
        buyValue: update.buyValue,
        doorsQty: update.doorsQty,
        seatsQty: update.seatsQty,
      };
      return objeto;
    }
    return update;
  };
}