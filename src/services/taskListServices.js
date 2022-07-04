const taskListModels = require('../models/taskListModels');

// UTILS:
const HTTPSCODE = require('../utils/HTTPSCODE');
const MESSAGE = require('../utils/MESSAGE');

const validMessageCode = require('./validMessageCode');

const getAllTaskList = async () => {
  const allTaskList = await taskListModels.getAllTaskList();
  return allTaskList;
};

const titleValidation = (title) => {
  if (title.length > 30) {
    throw validMessageCode(MESSAGE.TITLESIZE, HTTPSCODE.UNPROCESSABLE);
  }
};

const statusValidation = (status) => {
  const validStatuses = ['Pendente', 'Em andamento', 'Sucesso', 'Error'];
  const returnFind = validStatuses
      .find((validStatus) => validStatus === status);

  if (!returnFind) {
    throw validMessageCode(MESSAGE.STATUSERROR, HTTPSCODE.UNPROCESSABLE);
  }
};

const descriptionValidation = (description) => {
  if (description.length > 500) {
    throw validMessageCode(MESSAGE.DESCRIPTIONERROR, HTTPSCODE.UNPROCESSABLE);
  }
};

const createTask = async (title, status, description) => {
  titleValidation(title);
  statusValidation(status);
  descriptionValidation(description);
  await taskListModels.createTask(title, status, description);
  const messageToCreatedTask = 'Task created sucessfully';
  return messageToCreatedTask;
};

const idValidation = async (id) => {
  const allTaskList = await taskListModels.getAllTaskList();
  const idTaskValid = allTaskList.some((task) => task.id === Number(id));
  if (!idTaskValid) {
    throw validMessageCode(MESSAGE.IDINVALID, HTTPSCODE.UNPROCESSABLE);
  }
};

const deleteTask = async (id) => {
  await idValidation(id);
  await taskListModels.deleteTask(id);
  const messageToDeleteTask = 'Task deleted sucessfully';
  return messageToDeleteTask;
};

const editTaskTitle = async (id, title) => {
  await taskListModels.editTaskTitle(id, title);
  const messageToEditTitle = 'Title edited with sucess';
  return messageToEditTitle;
};

module.exports = {
  getAllTaskList,
  createTask,
  deleteTask,
  editTaskTitle,
};
