const connection = require('./connection');
const {queryGetAllTasks, queryCreateTask,
  queryDeleteTask, queryEditTitleTask} = require('./query');

const getAllTaskList = async () => {
  const [allTaskList] = await connection.execute(queryGetAllTasks);
  return allTaskList;
};

const createTask = async (title, status, description) => {
  const newTask = await connection.execute(queryCreateTask,
      [title, status, description]);
  return newTask;
};

const deleteTask = async (id) => {
  await connection.execute(queryDeleteTask, [id]);
  return true;
};

const editTaskTitle = async (id) => {
  await connection.execute(queryEditTitleTask, [id]);
  return true;
};

module.exports = {
  getAllTaskList,
  createTask,
  deleteTask,
  editTaskTitle,
};
