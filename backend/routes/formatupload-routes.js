const express=require('express');
const router=express.Router();
const FormatUploadController=require('../controllers/FormatUpload-Controller');


//routes for format upload
router.post('/addFormat',FormatUploadController.addFormatUpload);
router.get('/getFormat/:file',FormatUploadController.getFormatUpload);
router.post('/uploadFile',FormatUploadController.uploadFile);

module.exports=router;