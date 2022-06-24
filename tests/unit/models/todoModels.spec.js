const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

// HELPERS
const createTaskMock = require('../helper/createTaskMock');
const allTaskMock = require('../helper/allTaskMock');

const taskListModels = require('../../../src/models/taskListModels');
const connection = require('../../../src/models/connection');

describe('todoModels.getAllTaskList()', () => {
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

describe('todoModels.createTask()', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(createTaskMock.newId);
  });

  afterEach(async () => {
    connection.execute.restore();
  });

  it('Function to create a task correctly on models', async () => {
    const {newId, title, status, date, description} = createTaskMock;
    const returnTasKCreate = await taskListModels.createTask(title,
        status, date, description);
    expect(returnTasKCreate).to.be.deep.equal(newId);
  });
});
