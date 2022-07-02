const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

// HELPERS
const createTaskMock = require('../helper/createTaskMock');
const allTaskMock = require('../helper/allTaskMock');

const taskListModels = require('../../../src/models/taskListModels');
const connection = require('../../../src/models/connection');

describe('1 - taskListModels.getAllTaskList() wihout error', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(allTaskMock);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('1 - Function to get all task list correctly on models', async () => {
    const allTaskList = await taskListModels.getAllTaskList();
    expect(allTaskList).to.be.deep.equal(...allTaskMock);
  });
});

describe('2 - taskListModels.createTask() wihout error', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(createTaskMock.newId);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('1 - Function to create a task correctly on models', async () => {
    const {newId, title, status, date, description} = createTaskMock;
    const returnTasKCreate = await taskListModels.createTask(title,
        status, date, description);
    expect(returnTasKCreate).to.be.deep.equal(newId);
  });
});

describe('3 - taskListModels.deleteTask() wihout error', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(true);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('1 - Function to delete a task correctly on models', async () => {
    const returnFuncDeleteTask = await taskListModels
        .deleteTask(createTaskMock.newId);
    expect(returnFuncDeleteTask).to.be.true;
  });
});

describe('4 - taskListModels.editTaskTitle() wihout error', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(true);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('1 - Function to edit a task correctly on models', async () => {
    const returnFuncEditTask = await taskListModels
        .editTaskTitle(createTaskMock.newId);
    expect(returnFuncEditTask).to.be.true;
  });
});
