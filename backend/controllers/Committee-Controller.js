const { default: mongoose } = require("mongoose");
const Committee = require("../models/Committee");

const createCommittee = async (req, res) => {
  try {

    const members = req.body.members;
    console.log(members);
    const committee = new Committee({
      members: members
    });
    committee.save();
    res.status(200).json(await committee.populate('members'));
  }
  catch(err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

const getCommittees = async (req, res) => {
  try {
    res.status(200).json(await Committee.find().populate('members'));
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
const deleteCommittee = async (req, res) => {
  try {
    const id = req.params.id;
    await Committee.deleteOne({ _id: id });
    res.status(200).json({
      message: "Successfully deleted",  
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
const removeMembers = async (req, res) => {
  try {
    const { id, members } = req.body;
    console.log(req.body)
    const committee
    = await Committee.findOne({_id: id,});
    
    committee.members = committee.members.filter((member) => {
      return !member.includes(member.toString());
    });
    console.log(committee.members);
    await committee.save();
    return res.status(200).json({
      message: "Successfully Removed members",
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

const addMembers = async (req, res) => {
    try {
      const { id, members } = req.body;
      const committee = await Committee.findOne({
        id: id,
      });
      committee.members = members;
      await committee.save();
      return res.status(200).json({
        message: "Successfully Added members",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
}

const addMember = async (req, res) => {
  try {
    const committee = await Committee.findOne();

    if (committee) {
      committee.members.push(req.body.id);
      await Committee.updateOne(
        { _id: committee._id },
        { members: committee.members }
      );
    } else {
      new Committee({ members: [req.body.id] }).save();
    }
    res.status(200).json({
      message: "Successfully added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getMembers = async (req, res) => {
  try {
    const members = await Committee.findOne().populate("members");
    res.status(200).json(members);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const removeMember = async (req, res) => {
  try {
    const committee = await Committee.findOne().populate("members");
    if (committee) {
      await Committee.updateOne(
        { _id: committee._id },
        {
          members: committee.members.filter((k) => String(k._id) !== req.params.id),
        }
      );
      console.log("Before")
      console.log(committee.members.filter((k) => String(k._id) !== req.params.id))
    }
    res.status(200).json({
      message: "Successfully added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.getMembers = getMembers;
exports.removeMember = removeMember;
exports.addMember = addMember;
exports.createCommittee = createCommittee;
exports.addMembers = addMembers;
exports.removeMembers = removeMembers;
exports.deleteCommittee = deleteCommittee;
exports.getCommittees = getCommittees;