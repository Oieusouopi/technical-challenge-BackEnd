const query = {
  queryGetAllTasks: `SELECT *
    FROM TodoList.tasks ORDER BY title, created_at, status, description`,
  queryCreateTask: `INSERT INTO TodoList.tasks
    (title, status, description) VALUES (?, ?, ?)`,
  queryDeleteTask: 'DELETE FROM TodoList.tasks WHERE id = ?',
  queryEditTitleTask: 'UPDATE TodoList.tasks SET title = ? WHERE id = ?',
  queryEditStatusTask: 'UPDATE TodoList.tasks SET status = ? WHERE id = ?',
  queryEditDescriptionTask: `UPDATE TodoList.tasks
    SET description = ? WHERE id = ?`,
};

module.exports = query;
