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
}