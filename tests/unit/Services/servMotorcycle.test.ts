import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/Motorcycle';

const name = 'Honda Cb 600f Hornet';
const motorcycle1 = {
  model: name,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
  _id: '6376d2999c9859ed6998d48c',
  __v: 0,
};

const motorcycle = {
  id: '6376d2999c9859ed6998d48c',
  model: name,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const reqBody = {
  model: name,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

describe('Teste da camada service de motorcycles', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Testa se adiciona uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycle1);
    const service = new MotorcycleService();
    const result = await service.register(reqBody);
    expect(result).to.be.deep.equal(motorcycle);
  });

  it('Testa se busca uma moto por ID com sucesso', async function () {
    sinon.stub(Model, 'findOne').resolves(motorcycle1);
    const service = new MotorcycleService();
    const result = await service.getById('6376d2999c9859ed6998d48c');
    expect(result).to.be.deep.equal(motorcycle);
  });

  it('Testa se busca todos os veículos com sucesso', async function () {
    const motorCycles = [motorcycle1];
    sinon.stub(Model, 'find').resolves(motorCycles);
    const service = new MotorcycleService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal([motorcycle]);
  });
});