const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

// HELPERS
const allTaskList = require('../helper/allTaskMock');
const newTaskMock = require('../helper/newTaskMock');

const taskListServices = require('../../../src/services/taskListServices');
const taskListControllers = require(
    '../../../src/controllers/taskListControllers');

describe('1 - taskListControllers.getAllTaskList() wihout error', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(taskListServices, 'getAllTaskList').resolves(allTaskList);
  });

  afterEach(() => {
    taskListServices.getAllTaskList.restore();
  });

  it(`1 - Function to get all tasks from the list in the controller
    returning a res status 200`, async () => {
    await taskListControllers.getAllTaskList(req, res, next);
    expect(res.status.calledWith(200)).to.be.true;
  });

  it(`2 - Function to get all tasks from the list in the controller
    returning a res json an array`, async () => {
    await taskListControllers.getAllTaskList(req, res, next);
    expect(res.json.calledWith(sinon.match.array)).to.be.true;
  });
});

describe('2 - taskListControllers.createTask() wihout error', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.body = {
      title: 'atendimento',
      responsibleUser: 'algum usuario',
      status: 'pendente',
      description: 'limpeza de papeis que não utilizaremos',
    };

    sinon.stub(taskListServices, 'createTask')
        .resolves('Task created sucessfully');
  });

  afterEach(() => {
    taskListServices.createTask.restore();
  });

  it(`1 - Function to create task in the controller
    returning a res status 201`, async () => {
    await taskListControllers.createTask(req, res, next);
    expect(res.status.calledWith(201)).to.be.true;
  });
});

describe('3 - taskListControllers.deleteTask() wihout error', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = {id: 1};

    sinon.stub(taskListServices, 'deleteTask')
        .resolves('Task deleted sucessfully');
  });

  afterEach(() => {
    taskListServices.deleteTask.restore();
  });

  it(`1 - Function to delete task in the controller
  returng a res status 204`, async () => {
    await taskListControllers.deleteTask(req, res, next);
    expect(res.status.calledWith(204)).to.be.true;
  });
});

describe('4 - taskListControllers.editTaskTitle() wihout error', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = {id: 1};
    req.body = {title: newTaskMock.newTitle};

    sinon.stub(taskListServices, 'editTaskTitle')
        .resolves('Title edited with sucess');
  });

  afterEach(() => {
    taskListServices.editTaskTitle.restore();
  });

  it(`1 - Function to edit title task in the controller
  return a res status 200`, async () => {
    await taskListControllers.editTaskTitle(req, res, next);
    expect(res.status.calledWith(200)).to.be.true;
  });
});

describe('5 - taskListControllers.editTaskDescription() wihout error', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = {id: 1};
    req.body = {description: newTaskMock.newDescription};

    sinon.stub(taskListServices, 'editTaskDescription')
        .resolves('Description edited with sucess');
  });

  afterEach(() => {
    taskListServices.editTaskDescription.restore();
  });

  it(`1 - Function to edit description task in the controller
  return a res status 200`, async () => {
    await taskListControllers.editTaskDescription(req, res, next);
    expect(res.status.calledWith(200)).to.be.true;
  });
});

describe('6 - taskListControllers.editTaskStatus() wihout error', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = {id: 1};
    req.body = {status: newTaskMock.newStatus};

    sinon.stub(taskListServices, 'editTaskStatus')
        .resolves('Status edited with sucess');
  });

  afterEach(() => {
    taskListServices.editTaskStatus.restore();
  });

  it(`1 - Function to edit status task in the controller
  return a res status 200`, async () => {
    await taskListControllers.editTaskStatus(req, res, next);
    expect(res.status.calledWith(200)).to.be.true;
  });
});
