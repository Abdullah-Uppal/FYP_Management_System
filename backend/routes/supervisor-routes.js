const express=require('express');
const router=express.Router();
const supervisorController=require('../controllers/Supervisor-Controller');





//supervisor
router.post('/addSupervisor',supervisorController.addSupervisor);
router.get('/getSupervisor',supervisorController.getSupervisor);
router.get('/getOneSupervisor/:id', supervisorController.getOneSupervisor);
router.delete('/deleteSupervisor/:id',supervisorController.deleteSupervisor);
router.put('/updateSupervisor/:id',supervisorController.updateSupervisor);
router.get('notInCommittee', supervisorController.notIncommittee);


module.exports=router;