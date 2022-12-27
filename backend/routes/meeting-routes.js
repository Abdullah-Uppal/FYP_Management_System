const express=require('express');
const router=express.Router();
const MeeetingController=require('../controllers/Meeting-Controller');meeeting





//Meeeting
router.post('/addMeeeting',MeeetingController.addMeeeting);
router.get('/getMeeeting',MeeetingController.getMeeeting);
router.get('/getOneMeeeting/:id', MeeetingController.getOneMeeeting);
router.delete('/deleteMeeeting/:id',MeeetingController.deleteMeeeting);
router.put('/updateMeeeting/:id',MeeetingController.updateMeeeting);


module.exports=router;