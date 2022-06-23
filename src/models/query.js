const query = {
  queryGetAllTasks: `SELECT title, status, created_at, description
    FROM TodoList.tasks ORDER BY title, created_at, status, description`,
};

module.exports = query;
