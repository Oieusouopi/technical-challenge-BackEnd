const taskListModels = require('../models/taskListModels');

const getAllTaskList = async () => {
  const allTaskList = await taskListModels.getAllTaskList();
  return allTaskList;
};

const createTask = async (title, status, description, date) => {
  const dateFormat = new Date(date);
  await taskListModels.createTask(title, status, dateFormat, description);
  const messageToCreatedTask = 'Task created sucessfully';
  return messageToCreatedTask;
};

module.exports = {
  getAllTaskList,
  createTask,
};
