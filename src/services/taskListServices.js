const taskListModels = require('../models/taskListModels');

const getAllTaskList = async () => {
  const allTaskList = await taskListModels.getAllTaskList();
  return allTaskList;
};

module.exports = {
  getAllTaskList,
};
