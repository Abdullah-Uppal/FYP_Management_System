const Group = require('../models/Group');
const Person = require('../models/Person');

const create = async (req, res) => {
  try {
    console.log(req.body);
    const { id,  students } = req.body;

    const group = new Group({
      id, students
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
      id: req.body.id,
      project: null,
      students: [],
      advisors: [],
    });
    await group.save();
    return res.status(200).json({
      id: group.id,
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
    const { id, students } = req.body;
    const group = await Group.findOne({
      id: id,
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

// controller to remove students from a group
const remove_students = async (req, res) => {
  try {
    const { id, students } = req.body;
    console.log(req.body)
    const group
    = await Group.findOne({
      id: id,
    });
    
    group.students = group.students.filter((student) => {
      return !students.includes(student.toString());
    });
    console.log(group.students);
    await group.save();
    return res.status(200).json({
      message: "Successfully Removed Students",
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
    const { id, advisors } = req.body;
    const group
    = await Group.findOne({
      id: id,
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

// controller to remove advisors from a group
const remove_advisors = async (req, res) => {
  try {
    const { id, advisors } = req.body;
    const group
    = await Group.findOne({
      id: id,
    });
    group.advisors = group.advisors.filter((advisor) => {
      return !advisors.includes(advisor.toString());
    });
    await group.save();
    return res.status(200).json({
      message: "Successfully Removed Advisors",
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
    const { id, project } = req.body;
    const group
    = await Group.findOne({
      id: id,
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
    const groups = await Group.find().populate({
        path: 'students',
        select: 'regno',
    });
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
      id: req.params.id,
    }).populate({
        path: 'students',
        select: 'regno',
    });
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
      await Group.deleteOne({ id: req.params.id })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const update = async (req, res) => {
  try {  
    const { project, students, advisors } = req.body;
    return res.status(200).json(await Group.updateOne({ id: req.params.id }, {
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
    // console.log(groups);
    if (groups) {
      const studentGroups = groups.filter(
        (group) => {
          return group.students.map(student => student.toString()).includes(req.params.id);
        }
      );
    //   console.log(await studentGroups[0].populate({path:'students', select: '_id regno'}))
      if (studentGroups[0] === undefined) {
        return res.status(200).json([]);
      }
      return res.status(200).json(await studentGroups[0].populate({path:'students', select: '_id regno'}));
    }
    else {
      return res.status(404).json(null);
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
exports.remove_students = remove_students;