const express=require('express');
const router=express.Router();
const PersonController=require('../controllers/Person-Controller');

//persom or student same
router.post('/addPerson',PersonController.addPerson);
router.get('/getPerson',PersonController.getPerson);
router.get('/getOnePerson/:id', PersonController.getOnePerson);
router.delete('/:id',PersonController.deletePerson);
router.put('/updatePerson/:id',PersonController.updatePerson);
router.get('/ungroupedStudents', PersonController.ungroupedStudents);



module.exports=router;
