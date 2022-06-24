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
  const next = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.next = sinon.stub().returns();

    sinon.stub(taskListServices, 'getAllTaskList').resolves(allTaskList);
  });

  afterEach(() => {
    taskListServices.getAllTaskList.restore();
  });

  it(`function to get all tasks from the list in the controller
    returning a res status 200`, async () => {
    await taskListControllers.getAllTaskList(req, res, next);
    expect(res.status.calledWith(200)).to.be.true;
  });
});
