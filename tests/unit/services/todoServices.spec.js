const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const allTaskMock = require('../helper/allTaskMock');

const taskListModels = require('../../../src/models/taskListModels');
const taskListServices = require('../../../src/services/taskListServices');
const createTaskMock = require('../helper/createTaskMock');

describe('1 - todoServices.getAllTaskList()', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'getAllTaskList').resolves(allTaskMock[0]);
  });

  afterEach(() => {
    taskListModels.getAllTaskList.restore();
  });

  it('1 - function to get all tasks list correctly on services', async () => {
    const allTaskList = await taskListServices.getAllTaskList();
    expect(allTaskList).to.be.equal(...allTaskMock);
  });
});

describe('2 - todoServices.createTask()', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'createTask').resolves(createTaskMock.newId);
  });

  afterEach(() => {
    taskListModels.createTask.restore();
  });

  it('1 - function to create tasks correctly on services', async () => {
    const returnTaskCreate = await taskListServices.createTask();
    expect(returnTaskCreate).to.be.equal('Task created sucessfully');
  });
});
