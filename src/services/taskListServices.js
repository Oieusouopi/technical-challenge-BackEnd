const taskListModels = require('../models/taskListModels');

const getAllTaskList = async () => {
  const allTaskList = await taskListModels.getAllTaskList();
  return allTaskList;
};

const createTask = async (title, status, description) => {
  await taskListModels.createTask(title, status, description);
  const messageToCreatedTask = 'Task created sucessfully';
  return messageToCreatedTask;
};

module.exports = {
  getAllTaskList,
  createTask,
};
