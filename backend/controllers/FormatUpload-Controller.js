const FormatUpload=require('../models/FormatUpload');
var multer = require('multer')
const fs = require("fs");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null,'assets')
  },
  filename: function (req, file, cb) {
    
    cb(null,file.originalname)
  }
})
var upload = multer({ storage: storage }).single('file')


const uploadFile = async (req, res) => {
    try {
        console.log('name',req.body)
        upload(req, res, function (err) {
            
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).send({message:'Ok'})
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


//formatupload adding function
const addFormatUpload = async (req, res) => {
    try {
        const { title, description, file } = req.body;
        
        const formatuploads = new FormatUpload({
            title,
            description,
            file,
            date: new Date().toISOString(),
        });
        await formatuploads.save();
        return res.status(200).json({message:'Ok'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


//formatupload getting function
const getFormatData = async (req, res) => {
    try {
     
      const formats = await FormatUpload.find();
      return res.status(200).json(formats);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
  }
  const removeSync = (req, res) => {
    console.log('body',req.params.id)
    const fileName = req.params.id;
    // console.log('baseDir ',__basedir)
    const directoryPath = "assets/";
  
    try {
      fs.unlinkSync(directoryPath + fileName);
  
      res.status(200).send({
        message: "File is deleted.",
      });
    } catch (err) {
      res.status(500).send({
        message: "Could not delete the file. " + err,
      });
    }
  };

// remove data from database of formatupload
const removeFormatUpload = async (req, res) => {
    try {
        const { id } = req.body;
        await FormatUpload.deleteOne({id:id});
        return res.status(200).json({message:'Ok'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}




exports.addFormatUpload = addFormatUpload;
exports.getFormatData = getFormatData;
exports.uploadFile = uploadFile;
exports.removeSync = removeSync;
exports.removeFormatUpload = removeFormatUpload;