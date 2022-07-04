const router = require('express').Router();
const taskListController = require('../src/controllers/taskListControllers');

router.get('/task', taskListController.getAllTaskList);

router.post('/task', taskListController.createTask);

router.delete('/task/:id', taskListController.deleteTask);

router.put('/taskTitle/:id', taskListController.editTaskTitle);

router.put('/taskDesc/:id', taskListController.editTaskDescription);

router.put('/taskStatus/:id', taskListController.editTaskStatus);

module.exports = router;
