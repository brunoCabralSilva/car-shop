import { Model, Schema, model, models } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  register = async (body: T) => {
    const modelReturn = await this.model.create({ ...body });
    return modelReturn;
  };

  getAll = async () : Promise<T[] | any > => {
    const modelReturn = await this.model.find();
    return modelReturn;
  };

  getById = async (id: string): Promise<T | any> => {
    const modelReturn = await this.model.findOne({ _id: id }, {});
    return modelReturn;
  };

  updateCar = async (obj: any, type: string): Promise<T | any> => {
    if (type === 'car') {
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
      return update;
    }
    const update = await this.model.findByIdAndUpdate(
      { _id: obj.id },
      {
        model: obj.model,
        year: obj.year,
        color: obj.color,
        status: obj.status,
        buyValue: obj.buyValue,
        category: obj.category,
        engineCapacity: obj.engineCapacity,
      },
      { new: true },
    );
    return update;
  };
}