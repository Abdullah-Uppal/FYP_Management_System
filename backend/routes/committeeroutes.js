const CommitteeController = require('../controllers/Committee-Controller');

const router = require('express').Router();

router.get('/getMembers', CommitteeController.getMembers);
router.delete('/deleteMember/:id', CommitteeController.removeMember);
router.post('/addMember', CommitteeController.addMember);

module.exports = router;