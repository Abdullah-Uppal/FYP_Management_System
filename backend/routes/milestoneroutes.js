const MilestoneController = require('../controllers/Milestone-Controller');

const router = require('express').Router();

router.post('/addMilestone', MilestoneController.createMilestone);
router.get('/getMilestones', MilestoneController.allMilestones);
router.get('/getOneMilestone/:id', MilestoneController.oneMilestone);
router.delete('/deleteMilestone/:id', MilestoneController.deleteMilestone);
router.put('/updateMilestone/:id', MilestoneController.updateMilestone);
router.post('/uploadfile', MilestoneController.uploadFile);

module.exports = router;