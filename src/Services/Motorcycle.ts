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
    return registerMotorcycle;
  };
}