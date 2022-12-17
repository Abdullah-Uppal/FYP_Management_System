const express=require('express');
const router=express.Router();
const PersonController=require('../controllers/Person-Controller');
const supervisorController=require('../controllers/supervisor-controller');

//persom or student same
router.post('/addPerson',PersonController.addPerson);
router.get('/getPerson',PersonController.getPerson);
router.get('/getOnePerson/:id', PersonController.getOnePerson);
router.delete('/:id',PersonController.deletePerson);
router.put('/updatePerson/:id',PersonController.updatePerson);



module.exports=router;
