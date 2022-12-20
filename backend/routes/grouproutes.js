const GroupController = require('../controllers/Group-Controller');

const router = require('express').Router();

router.post('/addGroup', GroupController.createGroup);
router.get('/getGroups', GroupController.allGroups);
router.get('/getOneGroup/:id', GroupController.oneGroup);
router.delete('/deleteGroup/:id', GroupController.deleteGroup);
router.put('/updateGroup/:id', GroupController.updateGroup);

module.exports = router;