const CommitteeController = require('../controllers/Committee-Controller');

const router = require('express').Router();

router.get('/getMembers', CommitteeController.getMembers);
router.delete('/deleteMember/:id', CommitteeController.removeMember);
router.post('/addMember', CommitteeController.addMember);
router.post('/createCommittee', CommitteeController.createCommittee);
router.delete('/deleteCommittee/:id', CommitteeController.deleteCommittee);
router.post('/addMembers', CommitteeController.addMembers);
router.delete('/deleteMembers', CommitteeController.removeMembers);

// exports.createCommittee = createCommittee;
// exports.addMembers = addMembers;
// exports.removeMembers = removeMembers;
// exports.deleteCommittee = deleteCommittee;
module.exports = router;