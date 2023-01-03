const express=require('express');
const router=express.Router();
const departmentController=require('../controllers/Department-Controller');





//supervisor
router.post('/addDepartment',departmentController.addDepartment);
router.get('/getDepartment',departmentController.getDepartments);
router.get('/getOneDepartment/:id', departmentController.getOneDepartment);
router.delete('/deleteDepartment/:id',departmentController.deleteDepartment);
router.put('/updateDepartment/:id',departmentController.updateDepartment);


module.exports=router;