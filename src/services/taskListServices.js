const taskListModels = require('../models/taskListModels');

const getAllTaskList = async () => {
  const allTaskList = await taskListModels.getAllTaskList();
  return allTaskList;
};

const createTask = async (title, status, description) => {
  const date = Date.now();
  await taskListModels.createTask(title, status, date, description);
  const messageToCreatedTask = 'Task created sucessfully';
  return messageToCreatedTask;
};

module.exports = {
  getAllTaskList,
  createTask,
};
