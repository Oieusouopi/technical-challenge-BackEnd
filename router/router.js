const router = require('express').Router();
const taskListController = require('../src/controllers/taskListControllers');

router.get('/task', taskListController.getAllTaskList);

router.post('/task', taskListController.createTask);

module.exports = router;
