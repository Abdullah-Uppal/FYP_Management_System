const express=require('express');
const router=express.Router();
const MeeetingController=require('../controllers/Meeting-Controller');





//Meeeting
router.post('/addMeeting',MeeetingController.addMeeeting);
router.get('/getMeeting',MeeetingController.getMeeeting);
router.get('/getOneMeeting/:id', MeeetingController.getOneMeeeting);
router.delete('/deleteMeeting/:id',MeeetingController.deleteMeeeting);
router.put('/updateMeeting/:id',MeeetingController.updateMeeeting);


module.exports=router;
