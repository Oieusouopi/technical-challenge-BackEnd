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
    const {title, responsibleUser, status, description} = req.body;
    const messageToCreatedTask = await taskListServices
        .createTask(title, responsibleUser, status, description);
    res.status(HTTPSCODE.CREATED).json(messageToCreatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const {id} = req.params;
    const messageToDeletedTask = await taskListServices
        .deleteTask(id);
    res.status(HTTPSCODE.NO_CONTENT).json(messageToDeletedTask);
  } catch (error) {
    next(error);
  }
};

const editTaskTitle = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {title} = req.body;
    const messageToEditTitle = await taskListServices
        .editTaskTitle(id, title);
    res.status(HTTPSCODE.OK).json(messageToEditTitle);
  } catch (error) {
    next(error);
  }
};

const editTaskDescription = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {description} = req.body;
    const messageToEditDescription = await taskListServices
        .editTaskDescription(id, description);
    res.status(HTTPSCODE.OK).json(messageToEditDescription);
  } catch (error) {
    next(error);
  }
};

const editTaskStatus = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {status} = req.body;
    const messageToEditStatus = await taskListServices
        .editTaskStatus(id, status);
    res.status(HTTPSCODE.OK).json(messageToEditStatus);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTaskList,
  createTask,
  deleteTask,
  editTaskTitle,
  editTaskDescription,
  editTaskStatus,
};
