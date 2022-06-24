const router = require('express').Router();
const taskListController = require('../src/controllers/taskListControllers');

router.use('/task', taskListController.getAllTaskList);

module.exports = router;
