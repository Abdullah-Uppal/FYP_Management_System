const ProjectController = require('../controllers/ProjectController');

const router = require('express').Router()

router.post('/addProject',ProjectController.createProject);
router.get('/getProjects',ProjectController.allProjects);
router.get('/getOneProject/:id', ProjectController.oneProject);
router.delete('/deleteProject/:id',ProjectController.deleteProject);
router.put('/updateProject/:id',ProjectController.updateProject);

module.exports = router;