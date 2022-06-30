const connection = require('./connection');
const {queryGetAllTasks, queryCreateTask} = require('./query');

const getAllTaskList = async () => {
  const [allTaskList] = await connection.execute(queryGetAllTasks);
  return allTaskList;
};

const createTask = async (title, status, date, description) => {
  const newTask = await connection.execute(queryCreateTask,
      [title, status, date, description]);
  return newTask;
};

module.exports = {
  getAllTaskList,
  createTask,
};
