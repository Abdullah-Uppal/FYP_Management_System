const FormatUpload=require('../models/FormatUpload');
var multer = require('multer')

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
            file
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
      console.log('getFormatData')
      const formats = await FormatUpload.find();
      console.log('formats',formats)
      return res.status(200).json(formats);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
  }


exports.addFormatUpload = addFormatUpload;
exports.getFormatData = getFormatData;
exports.uploadFile = uploadFile;