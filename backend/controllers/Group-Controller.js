const Group = require('../models/Group');
const Person = require('../models/Person');

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

const create_empty_group = async (req, res) => {
  try {
    const group = new Group({
      project: null,
      students: [],
      advisors: [],
    });
    await group.save();
    return res.status(200).json({
      groupid: group._id,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      groupid: null,
    });
  }
}

// controller to add students to a group of id
const add_students = async (req, res) => {
  try {
    const { groupid, students } = req.body;
    const group = await Group.findOne({
      _id: groupid,
    });
    group.students = students;
    await group.save();
    return res.status(200).json({
      message: "Successfully Added Students",
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

// controller to add advisors to a group of id
const add_advisors = async (req, res) => {
  try {
    const { groupid, advisors } = req.body;
    const group
    = await Group.findOne({
      _id: groupid,
    });
    group.advisors = advisors;
    await group.save();
    return res.status(200).json({
      message: "Successfully Added Advisors",
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

// controller to add project to a group of id
const add_project = async (req, res) => {
  try {
    const { groupid, project } = req.body;
    const group
    = await Group.findOne({
      _id: groupid,
    });
    group.project = project;
    await group.save();
    return res.status(200).json({
      message: "Successfully Added Project",
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

const getStudentGroup = async (req, res) => {
  try {
    const groups = await Group.find();
    if (groups) {
      const studentGroups = groups.filter(
        (group) => {
          return group.students.includes(req.params.id);
        }
      );
      return res.status(404).json(studentGroups[0]);
    }
    else {
      return res.status(200).json(null);
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
}


exports.createGroup = create;
exports.allGroups = all;
exports.oneGroup = one;
exports.deleteGroup = remove;
exports.updateGroup = update;
exports.create_empty_group = create_empty_group;
exports.add_students = add_students;
exports.add_advisors = add_advisors;
exports.add_project = add_project;
exports.getStudentGroup = getStudentGroup;