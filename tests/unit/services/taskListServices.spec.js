const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

// HELPERS
const allTaskMock = require('../helper/allTaskMock');
const errorCreateTaskMock = require('../helper/errorCreateTaskMock');
const validMessagesMock = require(
    '../helper/validMessagesMock.js/validMessagesMock');

const taskListModels = require('../../../src/models/taskListModels');
const taskListServices = require('../../../src/services/taskListServices');
const createTaskMock = require('../helper/createTaskMock');
const validMessageCode = require('../../../src/services/validMessageCode');

describe('1 - taskListServices.getAllTaskList() wihout error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'getAllTaskList').resolves(allTaskMock[0]);
  });

  afterEach(() => {
    taskListModels.getAllTaskList.restore();
  });

  it('1 - Function to get all tasks list correctly on services', async () => {
    const allTaskList = await taskListServices.getAllTaskList();
    expect(allTaskList).to.be.equal(...allTaskMock);
  });
});

describe('2 - taskListServices.createTask() wihout error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'createTask').resolves(createTaskMock.newId);
  });

  afterEach(() => {
    taskListModels.createTask.restore();
  });

  it('1 - Function to create tasks correctly on services', async () => {
    const {title, description, status} = createTaskMock;
    const returnTaskCreate = await taskListServices
        .createTask(title, status, description);
    expect(returnTaskCreate).to.be.equal('Task created sucessfully');
  });
});

describe('3 - taskListServices.createTask() with error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'createTask').resolves();
  });

  afterEach(() => {
    taskListModels.createTask.restore();
  });

  it(`1 - If \"title"\ on function
  to create tasks has size wrong`, async () => {
    try {
      const {description, status} = createTaskMock;
      const {title} = errorCreateTaskMock;
      await taskListServices
          .createTask(title, status, description);
    } catch (error) {
      expect(error).to.deep
          .equal(validMessageCode(validMessagesMock.TITLEMOCKSIZE, 422));
    }
  });

  it(`2 - If \"status"\ on function to create task has error`, async () => {
    try {
      const {description, title} = createTaskMock;
      const {status} = errorCreateTaskMock;
      await taskListServices.createTask(title, status, description);
    } catch (error) {
      expect(error).to.deep
          .equal(validMessageCode(validMessagesMock.STATUSERRORMOCK, 422));
    }
  });

  it(`3 - If \"describe"\ on function to create task has error`, async () => {
    try {
      const {status, title} = createTaskMock;
      const {description} = errorCreateTaskMock;
      await taskListServices
          .createTask(title, status, description);
    } catch (error) {
      expect(error).to.deep
          .equal(validMessageCode(validMessagesMock.DESCRIPTIONERRORMOCK, 422));
    }
  });
});

describe('4 - taskListServices.deleteTask() wihout error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'deleteTask').resolves(true);
  });

  afterEach(() => {
    taskListModels.deleteTask.restore();
  });

  it('1 - Function to delete a task correctly on service', async () => {
    const returnFuncDeleteTask = await taskListServices
        .deleteTask(createTaskMock.newId);
    expect(returnFuncDeleteTask).to.be.equal('Task deleted sucessfully');
  });
});

// describe('5 - taskListServices.editTask() wihout error', () => {
//   it('1 - Function to edit a task from the task list in service', () => {
//     beforeEach(() => {

//     });
//   });
// });
