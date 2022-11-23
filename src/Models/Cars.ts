import { Model, Schema, model } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class Cars {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      id: { type: String, required: false },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = model('Cars', this.schema);
  }

  register = async (body: ICar) => {
    const modelReturn = await this.model.create({ ...body });
    let finalStatus = modelReturn.status;
    if (!modelReturn.status) {
      finalStatus = false;
    }

    return ({
      id: modelReturn._id,
      model: modelReturn.model,
      year: modelReturn.year,
      color: modelReturn.color,
      status: finalStatus,
      buyValue: modelReturn.buyValue,
      doorsQty: modelReturn.doorsQty,
      seatsQty: modelReturn.seatsQty,
    });
  };

  getAll = async () : Promise<ICar[] | any > => {
    const modelReturn = await this.model.find();
    if (modelReturn) {
      const arrayReturn = modelReturn.map((obj) => {
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
    return modelReturn;
  };

  getById = async (id: string): Promise<ICar | any> => {
    const modelReturn = await this.model.findOne({ _id: id }, {});
    if (modelReturn) {
      return ({
        id: modelReturn._id,
        model: modelReturn.model,
        year: modelReturn.year,
        color: modelReturn.color,
        status: modelReturn.status,
        buyValue: modelReturn.buyValue,
        doorsQty: modelReturn.doorsQty,
        seatsQty: modelReturn.seatsQty,
      });
    }
    return modelReturn;
  };

  updateCar = async (obj: ICar): Promise<ICar | any> => {
    const update = await this.model.findByIdAndUpdate(
      { _id: obj.id },
      {
        model: obj.model,
        year: obj.year,
        color: obj.color,
        status: obj.status,
        buyValue: obj.buyValue,
        doorsQty: obj.doorsQty,
        seatsQty: obj.seatsQty,
      },
      { new: true },
    );

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