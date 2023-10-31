const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

//Route for projects
router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.post('/:id', projectController.createIssue);

module.exports = router;
