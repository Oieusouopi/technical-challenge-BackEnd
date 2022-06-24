const taskListServices = require('../services/taskListServices');

const getAllTaskList = async (_req, res, next) => {
  try {
    const allTaskList = await taskListServices.getAllTaskList();
    res.status(200).json(allTaskList);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTaskList,
};
