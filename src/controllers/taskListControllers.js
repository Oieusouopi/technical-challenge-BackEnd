const taskListServices = require('../services/taskListServices');

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
    const {title, status, description} = req.body;
    const messageToCreatedTask = await taskListServices
        .createTask(title, status, description);
    res.status(201).json(messageToCreatedTask);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTaskList,
  createTask,
};
