const Milestone = require('../models/Milestone');

var multer = require('multer')

// FOR FILE UPLOADS
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


// CONTROLLERS
/*
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  attachement: { type: String },
  project: { type: Schema.Types.ObjectId, ref: "Supervisor" }
 */
const create = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, deadline, attachement, project } =
      req.body;

    const milestone = new Milestone({
     title, description, deadline, attachement, project 
    });
    await milestone.save();
    return res.status(200).json({
      message: "Successfully Created",
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

const all = async (req, res) => {
  try {
    const milestones = await Milestone.find().populate();
    return res.status(200).json(milestones);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

const one = async (req, res) => {
  try {
    const milestone = await Milestone.findOne({
      _id: req.params.id,
    }).populate();
    return res.status(200).json(milestone);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

const remove = async (req, res) => {
  try {
    return res.status(200).json(
      await Milestone.deleteOne({ _id: req.params.id })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const update = async (req, res) => {
  try {
    const { title, description, deadline, attachement, project } =
      req.body;
    return res.status(200).json(await Milestone.updateOne({ _id: req.params.id }, {
       title, description, isAccepted, postedBy, acceptedRejectedBy 
    }));
  }
  catch (err) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.createMilestone = create;
exports.allMilestones = all;
exports.oneMilestone = one;
exports.deleteMilestone = remove;
exports.updateMilestone = update;
exports.uploadFile = uploadFile