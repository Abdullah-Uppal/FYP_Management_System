const GroupController = require('../controllers/Group-Controller');

const router = require('express').Router();

router.post('/addGroup', GroupController.createGroup);
router.get('/getGroups', GroupController.allGroups);
router.get('/getOneGroup/:id', GroupController.oneGroup);
router.delete('/deleteGroup/:id', GroupController.deleteGroup);
router.put('/updateGroup/:id', GroupController.updateGroup);
router.get('/createGroup', GroupController.create_empty_group);
router.post('/addStudentsToGroup/:id', GroupController.add_students);
router.post('/addAdvisorsToGroup/:id', GroupController.add_advisors);
router.post('/addProjectToGroup/:id', GroupController.add_project);
router.get('/getStudentGroup/:id', GroupController.getStudentGroup);
router.delete('/removeStudents', GroupController.remove_students);


module.exports = router;