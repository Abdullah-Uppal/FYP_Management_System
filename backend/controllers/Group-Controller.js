const Group = require('../models/Group');


const create = async (req, res) => {
  try {
    console.log(req.body);
    const { project, students, advisors } = req.body;

    const group = new Group({
      project, students, advisors 
    });
    await group.save();
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
    const groups = await Group.find().populate();
    return res.status(200).json(groups);
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
    const group = await Group.findOne({
      _id: req.params.id,
    }).populate();
    return res.status(200).json(group);
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
      await Group.deleteOne({ _id: req.params.id })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const update = async (req, res) => {
  try {  
    const { project, students, advisors } = req.body;
    return res.status(200).json(await Group.updateOne({ _id: req.params.id }, {
      project, students, advisors 
    }));
  }
  catch (err) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.createGroup = create;
exports.allGroups = all;
exports.oneGroup = one;
exports.deleteGroup = remove;
exports.updateGroup = update;