const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const todoServices = require('../../../src/services/todoServices');
const allTaskList = require('../helper/allTaskMock');

describe('todoControllers()', () => {
  const req = {};
  const res = {};
  const next = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.next = sinon.stub().returns();

    sinon.stub(todoServices, 'getAllTaskList').resolves(allTaskList);
  });

  afterEach(() => {
    todoServices.getAllTaskList.restore();
  });

  it(`function to get all tasks from the list in the controller
    returning a res status 200`, async () => {
    await todoControllers.getAllTaskList(req, res, next);
    expect(res.status.calledWith(200)).to.be.equal.true;
  });
});
