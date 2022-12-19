const Project = require('../models/Project');

const create = async (req, res) => {
  try {
    const { title, description, isAccepted, postedBy, acceptedRejectedBy } =
      req.body;

    const project = new Project({
      title,
      description,
      isAccepted,
      postedBy,
      acceptedRejectedBy,
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
    const projects = await Project.find().populate();
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
    }).populate();
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
    const { title, description, isAccepted, postedBy, acceptedRejectedBy } =
      req.body;
    return res.status(200).json(await Project.updateOne({ _id: req.params.id }, {
       title, description, isAccepted, postedBy, acceptedRejectedBy 
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
