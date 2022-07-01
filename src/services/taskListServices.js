const taskListModels = require('../models/taskListModels');
const HTTPSCODE = require('../utils/HTTPSCODE');
const MESSAGE = require('../utils/MESSAGE');
const validMessageCode = require('./validMessageCode');

const getAllTaskList = async () => {
  const allTaskList = await taskListModels.getAllTaskList();
  return allTaskList;
};

const titleValidation = (title) => {
  if (title.length > 50) {
    throw validMessageCode(MESSAGE.TITLESIZE, HTTPSCODE.UNPROCESSABLE);
  }
};

const statusValidation = (status) => {
  const validStatuses = ['Pendente', 'Em andamento', 'Sucesso', 'Error'];
  const returnFind = validStatuses
      .find((validStatus) => validStatus === status);

  if (!returnFind) {
    throw validMessageCode(MESSAGE.STATUSERROR, HTTPSCODE.BAD_REQUEST);
  }
};

const createTask = async (title, status, description) => {
  titleValidation(title);
  statusValidation(status);
  await taskListModels.createTask(title, status, description);
  const messageToCreatedTask = 'Task created sucessfully';
  return messageToCreatedTask;
};

module.exports = {
  getAllTaskList,
  createTask,
};
