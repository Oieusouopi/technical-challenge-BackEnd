const connection = require('./connection');
const {queryGetAllTasks} = require('./query');

const getAllTaskList = async () => {
  const [allTaskList] = await connection.execute(queryGetAllTasks);
  return allTaskList;
};

module.exports = {
  getAllTaskList,
};
