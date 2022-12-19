const express= require('express');
const router=express.Router();
const FormatUploadController=require('../controllers/FormatUpload-Controller');


//routes for format upload
router.post('/addformat',FormatUploadController.addFormatUpload);
router.get('/all',FormatUploadController.getFormatData);
router.post('/uploadfile',FormatUploadController.uploadFile);

module.exports=router;