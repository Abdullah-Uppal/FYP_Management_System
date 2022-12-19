const FormatUpload=require('../models/FormatUpload');
var multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null,'public')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname )
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
            return res.status(200).send(req.file)
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
        console.log(req.body);
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
const getFormatUpload = async (req, res) => {
    let formatupload;
    console.log(req.params.file);
    try {
        formatupload = await FormatUpload.findOne({ file: req.params.file });
    } catch (error) {
        console.log(error);
    }

    if (!formatupload) {
        return res.status(404).json({ message: 'No FormatUploads found' });
    } else {
        return res.status(200).json({formatupload});
    }
}


exports.addFormatUpload = addFormatUpload;
exports.getFormatUpload = getFormatUpload;
exports.uploadFile = uploadFile;