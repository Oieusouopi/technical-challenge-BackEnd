const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');
const allTaskMock = require('../helper/allTaskMock');

const taskListModels = require('../../../src/models/taskListModels');
const connection = require('../../../src/models/connection');

describe('todoModels()', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(allTaskMock);
  });

  afterEach(async () => {
    connection.execute.restore();
  });

  it('Function to get all task list correctly on models', async () => {
    const allTaskList = await taskListModels.getAllTaskList();
    expect(allTaskList).to.be.deep.equal(...allTaskMock);
  });
});
