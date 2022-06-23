const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const allTaskMock = require('../helper/allTaskMock');

const todoModels = require('../../../src/models');
const todoServices = require('../../../src/');

describe('todoServices()', () => {
  it('Get all tasks list correctly', async () => {
    const allTaskList = todoServices.getAllTasks();
    expect(allTaskList).to.be.equal(...allTaskMock);
  });
});
