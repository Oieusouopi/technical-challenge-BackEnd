const query = {
  queryGetAllTasks: `SELECT *
    FROM TodoList.tasks ORDER BY title, created_at, status, description`,
  queryCreateTask: `INSERT INTO TodoList.tasks
    (title, status, description) VALUES (?, ?, ?)`,
  queryDeleteTask: `DELETE FROM TodoList.tasks WHERE id = ?`,
};

module.exports = query;
