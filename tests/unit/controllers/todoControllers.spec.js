const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const taskListServices = require('../../../src/services/taskListServices');
const taskListControllers = require(
    '../../../src/controllers/taskListControllers');
const allTaskList = require('../helper/allTaskMock');

describe('todoControllers.getAllTaskList()', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    // res.next = sinon.stub().returns();

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

describe('todoControllers.createTask()', () => {
  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    // next = sinon.stub().returns();

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
