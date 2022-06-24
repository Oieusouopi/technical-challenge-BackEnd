const query = {
  queryGetAllTasks: `SELECT title, status, created_at, description
    FROM TodoList.tasks ORDER BY title, created_at, status, description`,
  queryCreateTask: `INSERT INTO TodoList.tasks
    (title, status, created_at, description) VALUES (?, ?, ?, ?)`,
};

module.exports = query;
