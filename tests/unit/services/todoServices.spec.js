const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const allTaskMock = require('../helper/allTaskMock');

const taskListModels = require('../../../src/models/taskListModels');
const taskListServices = require('../../../src/services/taskListServices');

describe('todoServices.getAllTaskList()', () => {
  beforeEach(() => {
    sinon.stub(taskListModels, 'getAllTaskList').resolves(allTaskMock[0]);
  });

  afterEach(() => {
    taskListModels.getAllTaskList.restore();
  });

  it('function to get all tasks list correctly on services', async () => {
    const allTaskList = await taskListServices.getAllTaskList();
    expect(allTaskList).to.be.equal(...allTaskMock);
  });
});
