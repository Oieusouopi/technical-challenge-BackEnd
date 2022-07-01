const taskListServices = require('../services/taskListServices');
const HTTPSCODE = require('../utils/HTTPSCODE');

const getAllTaskList = async (_req, res, next) => {
  try {
    const allTaskList = await taskListServices.getAllTaskList();
    res.status(HTTPSCODE.OK).json(allTaskList);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const {title, status, description} = req.body;
    const messageToCreatedTask = await taskListServices
        .createTask(title, status, description);
    res.status(HTTPSCODE.CREATED).json(messageToCreatedTask);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTaskList,
  createTask,
};
