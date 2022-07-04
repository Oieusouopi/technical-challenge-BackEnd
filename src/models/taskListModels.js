const connection = require('./connection');
const {queryGetAllTasks, queryCreateTask,
  queryDeleteTask, queryEditTitleTask,
  queryEditDescriptionTask, queryEditStatusTask} = require('./query');

const getAllTaskList = async () => {
  const [allTaskList] = await connection.execute(queryGetAllTasks);
  return allTaskList;
};

const createTask = async (title, responsibleUser, status, description) => {
  const newTask = await connection.execute(queryCreateTask,
      [title, responsibleUser, status, description]);
  return newTask;
};

const deleteTask = async (id) => {
  await connection.execute(queryDeleteTask, [id]);
  return true;
};

const editTaskTitle = async (id, title) => {
  await connection.execute(queryEditTitleTask, [title, id]);
  return true;
};

const editTaskDescription = async (id, description) => {
  await connection.execute(queryEditDescriptionTask, [description, id]);
  return true;
};

const editTaskStatus = async (id, status) => {
  await connection.execute(queryEditStatusTask, [status, id]);
  return true;
};

module.exports = {
  getAllTaskList,
  createTask,
  deleteTask,
  editTaskTitle,
  editTaskDescription,
  editTaskStatus,
};
