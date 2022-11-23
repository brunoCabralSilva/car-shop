import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/Cars';

const car1 = {
  model: 'mariaaa',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12,
  doorsQty: 2,
  seatsQty: 5,
  _id: '637e91c6431108facae90c10',
  __v: 0,
};

const car = {
  id: '637e91c6431108facae90c10',
  model: 'mariaaa',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12,
  doorsQty: 2,
  seatsQty: 5,
};

const ArrayCar1 = [{
  model: 'mariaaa',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12,
  doorsQty: 2,
  seatsQty: 5,
  _id: '637e91c6431108facae90c10',
  __v: 0,
}];

const ArrayCar = [{
  id: '637e91c6431108facae90c10',
  model: 'mariaaa',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12,
  doorsQty: 2,
  seatsQty: 5,
}];

const reqBody = {
  model: 'mariaaa',
  year: 1992,
  color: 'Black',
  status: true,
  tatus: true,
  buyValue: 12,
  doorsQty: 2,
  seatsQty: 5,
};

describe('Testes da camada service de car', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se adiciona um veículo com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(car1);
    const service = new CarService();
    const result = await service.register(reqBody);
    expect(result).to.be.deep.equal(car);
  });

  it('Testa se busca um veículo por ID', async function () {
    sinon.stub(Model, 'findOne').resolves(car1);
    const service = new CarService();
    const result = await service.getById('6376d2999c9859ed6998d48c');
    expect(result).to.be.deep.equal(car);
  });

  it('Testa se busca todos os carros com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(ArrayCar1);
    const service = new CarService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal(ArrayCar);
  });
});