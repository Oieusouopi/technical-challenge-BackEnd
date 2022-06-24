const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const allTaskMock = require('../helper/allTaskMock');

const todoModels = require('../../../src/models/todoModels');
const todoServices = require('../../../src/services/todoServices');

describe('todoServices()', () => {
  beforeEach(() => {
    sinon.stub(todoModels, 'getAllTaskList').resolves(allTaskMock[0]);
  });

  afterEach(() => {
    todoModels.getAllTaskList.restore();
  });

  it('function to get all tasks list correctly on services', async () => {
    const allTaskList = await todoServices.getAllTaskList();
    expect(allTaskList).to.be.equal(...allTaskMock);
  });
});
