const express=require('express');
const persons = require('../models/Person');
const router=express.Router();
const PersonController=require('../controllers/Person-Controller');



router.post('/addPerson',PersonController.addPerson);
router.get('/getPerson',PersonController.getPerson);
router.delete('/:id',PersonController.deletePerson);
router.put('/updatePerson/:id',PersonController.updatePerson);


module.exports=router;