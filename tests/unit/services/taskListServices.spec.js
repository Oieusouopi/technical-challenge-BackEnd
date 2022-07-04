const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

// HELPERS
const allTaskMock = require('../helper/allTaskMock');
const errorCreateTaskMock = require('../helper/errorCreateTaskMock');
const validMessagesMock = require(
    '../helper/validMessagesMock/validMessagesMock');

const taskListModels = require('../../../src/models/taskListModels');
const taskListServices = require('../../../src/services/taskListServices');
const createTaskMock = require('../helper/createTaskMock');
const validMessageCode = require('../../../src/services/validMessageCode');
const newTaskMock = require('../helper/newTaskMock');

describe('1 - taskListServices.getAllTaskList() wihout error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'getAllTaskList').resolves(allTaskMock[0]);
  });

  afterEach(() => {
    taskListModels.getAllTaskList.restore();
  });

  it('1 - Function to get all tasks list correctly in the services',
      async () => {
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

  it('1 - Function to create tasks correctly in the services', async () => {
    const {title, responsibleUser, description, status} = createTaskMock;
    const returnTaskCreate = await taskListServices
        .createTask(title, responsibleUser, status, description);
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
      const {description, responsibleUser, status} = createTaskMock;
      const {title} = errorCreateTaskMock;
      await taskListServices
          .createTask(title, responsibleUser, status, description);
    } catch (error) {
      expect(error).to.deep
          .equal(validMessageCode(validMessagesMock.TITLEMOCKSIZE, 422));
    }
  });

  it(`2 - If \"status"\ on function to create task has error`, async () => {
    try {
      const {description, responsibleUser, title} = createTaskMock;
      const {status} = errorCreateTaskMock;
      await taskListServices.createTask(title, responsibleUser,
          status, description);
    } catch (error) {
      expect(error).to.deep
          .equal(validMessageCode(validMessagesMock.STATUSERRORMOCK, 422));
    }
  });

  it(`3 - If \"describe"\ on function to create task has error`, async () => {
    try {
      const {status, responsibleUser, title} = createTaskMock;
      const {description} = errorCreateTaskMock;
      await taskListServices
          .createTask(title, responsibleUser, status, description);
    } catch (error) {
      expect(error).to.deep
          .equal(validMessageCode(validMessagesMock.DESCRIPTIONERRORMOCK, 422));
    }
  });

  it(`4 - If \"responsibleUser"\ on function to
create task has error`, async () => {
    try {
      const {status, description, title} = createTaskMock;
      const {responsibleUser} = errorCreateTaskMock;
      await taskListServices
          .createTask(title, responsibleUser, status, description);
    } catch (error) {
      expect(error).to.deep
          .equal(validMessageCode(validMessagesMock.RESPONSIBLEUSERINVALI,
              422));
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

  it('1 - Function to delete a task correctly in the service', async () => {
    const returnFuncDeleteTask = await taskListServices
        .deleteTask(createTaskMock.newId);
    expect(returnFuncDeleteTask).to.be.equal('Task deleted sucessfully');
  });
});

describe('5 - taskListServices.editTaskTitle() wihout error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'editTaskTitle').resolves(true);
  });

  afterEach(() => {
    taskListModels.editTaskTitle.restore();
  });

  it('1 - Function to edit a title task from the task list in the services',
      async () => {
        const {newId} = createTaskMock;
        const {newTitle} = newTaskMock;
        const returnFuncEditTaskTitle = await taskListServices
            .editTaskTitle(newId, newTitle);
        expect(returnFuncEditTaskTitle).to.be.equal('Title edited with sucess');
      });
});

describe('6 - taskListServices.editTaskDescription() wihout error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'editTaskDescription').resolves(true);
  });

  afterEach(() => {
    taskListModels.editTaskDescription.restore();
  });

  it(`1 - Function to edit a description task from the 
task list in the services`, async () => {
    const {newId} = createTaskMock;
    const {newDescription} = newTaskMock;
    const returnFuncEditTaskDescription = await taskListServices
        .editTaskDescription(newId, newDescription);
    expect(returnFuncEditTaskDescription).to
        .be.equal('Description edited with sucess');
  });
});

describe('7 - taskListServices.editTaskStatus() wihout error', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'editTaskStatus').resolves(true);
  });

  afterEach(() => {
    taskListModels.editTaskStatus.restore();
  });

  it('1 - Function to edit a status task from the task list in the services',
      async () => {
        const {newId} = createTaskMock;
        const {newStatus} = newTaskMock;
        const returnFuncEditTaskStatus = await taskListServices
            .editTaskStatus(newId, newStatus);
        expect(returnFuncEditTaskStatus).to
            .be.equal('Status edited with sucess');
      });
});
