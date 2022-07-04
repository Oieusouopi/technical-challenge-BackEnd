const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

// HELPERS
const createTaskMock = require('../helper/createTaskMock');
const allTaskMock = require('../helper/allTaskMock');
const newTaskMock = require('../helper/newTaskMock');

const taskListModels = require('../../../src/models/taskListModels');
const connection = require('../../../src/models/connection');

describe('1 - taskListModels.getAllTaskList() wihout error', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(allTaskMock);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('1 - Function to get all task list correctly in the models', async () => {
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

  it('1 - Function to create a task correctly in the models', async () => {
    const {newId, title, responsibleUser,
      status, date, description} = createTaskMock;
    const returnTasKCreate = await taskListModels.createTask(title,
        responsibleUser, status, date, description);
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

  it('1 - Function to delete a task correctly in the models', async () => {
    const returnFuncDeleteTask = await taskListModels
        .deleteTask(createTaskMock.newId);
    expect(returnFuncDeleteTask).to.be.true;
  });
});

describe('4 - taskListModels.editTask() wihout error', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(true);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('1 - Function to edit title task correctly in the models', async () => {
    const {newId} = createTaskMock;
    const {newTitle} = newTaskMock;
    const returnFuncEditTask = await taskListModels
        .editTaskTitle(newId, newTitle);
    expect(returnFuncEditTask).to.be.true;
  });

  it(`2 - Function to edit description task correctly
 in the models`, async () => {
    const {newId} = createTaskMock;
    const {newDescription} = newTaskMock;
    const returnFuncEditTask = await taskListModels
        .editTaskDescription(newId, newDescription);
    expect(returnFuncEditTask).to.be.true;
  });

  it('3 - Function to edit status task correctly in the models', async () => {
    const {newId} = createTaskMock;
    const {newStatus} = newTaskMock;
    const returnFunc = await taskListModels
        .editTaskStatus(newId, newStatus);
    expect(returnFunc).to.be.true;
  });
});
