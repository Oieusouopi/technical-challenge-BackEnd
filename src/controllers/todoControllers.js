const todoServices = require('../services/todoServices');

const getAllTaskList = async (_req, res, next) => {
  try {
    const allTaskList = await todoServices.getAllTaskList();
    res.status(200).json(allTaskList);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTaskList,
};
