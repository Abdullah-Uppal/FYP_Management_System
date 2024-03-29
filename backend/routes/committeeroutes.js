const CommitteeController = require('../controllers/Committee-Controller');

const router = require('express').Router();

router.get('/getMembers', CommitteeController.getMembers);
router.delete('/deleteMember/:id', CommitteeController.removeMember);
router.post('/addMember', CommitteeController.addMember);
router.post('/createCommittee', CommitteeController.createCommittee);
router.get('/getCommittees', CommitteeController.getCommittees);
router.delete('/deleteCommittee/:id', CommitteeController.deleteCommittee);
router.post('/addMembers', CommitteeController.addMembers);
router.delete('/deleteMembers', CommitteeController.removeMembers);

module.exports = router;