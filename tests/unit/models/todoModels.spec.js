const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');
const allTaskMock = require('../helper/allTaskMock');

const todoModels = require('../../../src/models/todoModels');
const connection = require('../../../src/models/connection');

describe('todoModels()', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(allTaskMock);
  });

  afterEach(async () => {
    connection.execute.restore();
  });

  it('Function to get all task list correctly on models', async () => {
    const allTaskList = await todoModels.getAllTaskList();
    expect(allTaskList).to.be.deep.equal(...allTaskMock);
  });
});
