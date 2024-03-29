const Project = require('../models/Project');

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
const create = async (req, res) => {
  try {
    console.log(req.body);
    let { title, description, proposalDocument,postedBy,modelType } =

      req.body;
      let post;
     
    const project = new Project({
      title,
      description,
      proposalDocument,
      modelType,
      postedBy  
    });
    await project.save();
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
    const projects = await Project.find().populate({ path: 'postedBy', select: 'name fname lname regno'});
    return res.status(200).json(projects);
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
    const project = await Project.findOne({
      _id: req.params.id,
    }).populate('postedBy');
    return res.status(200).json(project);
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
      await Project.deleteOne({ _id: req.params.id })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const update = async (req, res) => {
  try {
    const { title, description, isAccepted, postedBy, isPostedByAdmin } =
      req.body;
    return res.status(200).json(await Project.updateOne({ _id: req.params.id }, {
       title, description, isAccepted, postedBy, isPostedByAdmin
    }));
  }
  catch (err) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.createProject = create;
exports.allProjects = all;
exports.oneProject = one;
exports.deleteProject = remove;
exports.updateProject = update;
exports.uploadFile = uploadFile