const Committee = require("../models/Committee");

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
      const committee = new Committee({ members: [] }).save();
      await Committee.updateOne(
        { _id: committee._id },
        { members: [req.body.id] }
      );
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
    const members = await Committee.findOne();
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
    const committee = await Committee.findOne();
    if (committee) {
      await Committee.updateOne(
        { _id: committee._id },
        {
          members: committee.members.filter((k) => k._id !== req.params.id),
        }
      );
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
