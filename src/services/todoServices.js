const todoModels = require('../models/todoModels');

const getAllTaskList = async () => {
  const allTaskList = await todoModels.getAllTaskList();
  return allTaskList;
};

module.exports = {
  getAllTaskList,
};
