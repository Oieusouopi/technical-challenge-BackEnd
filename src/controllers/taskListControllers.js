const taskListServices = require('../services/taskListServices');
//  aa

const getAllTaskList = async (_req, res, next) => {
  try {
    const allTaskList = await taskListServices.getAllTaskList();
    res.status(200).json(allTaskList);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const {title, status, description, date} = req.body;
    const messageToCreatedTask = await taskListServices
        .createTask(title, status, description, date);
    res.status(201).json(messageToCreatedTask);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTaskList,
  createTask,
};
