const Evaluation = require("../models/Evaluation");

//Evaluation adding function
const addEvaluation = async (req, res) => {
  try {
    const { name, totalMarks, totalWeightage, project } = req.body;
    const evaluations = new Evaluation({
      name,
      totalMarks,
      totalWeightage,
      project,
    });
    await evaluations.save();
    return res.status(200).json({ message: "Ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Evaluation getting function
const getEvaluation = async (req, res) => {
  let evaluation;
  try {
    evaluation = await Evaluation.find();
  } catch (error) {
    console.log(error);
  }

  if (!evaluation) {
    return res.status(404).json({ message: "No Evaluations found" });
  } else {
    return res.status(200).json({ evaluation });
  }
};

// one evaluation getting function
const getOneEvaluation = async (req, res) => {
  let evaluation;
  try {
    evaluation = await Evaluation.findOne({ _id: req.params.id });
  } catch (error) {
    console.log(error);
  }

  if (!evaluation) {
    return res.status(404).json({ message: "Not Found" });
  } else {
    return res.status(200).json(evaluation);
  }
};

//evaluation updating function
const updateEvaluation = async (req, res) => {
  const { name, totalMarks, totalWeightage, project } = req.body;
  let evaluation;
  try {
    evaluation = await Evaluation.findByIdAndUpdate(
      req.params.id,
      {
        name,
        totalMarks,
        totalWeightage,
        project,
      },
      { new: true }
    );
    return res.status(200).json({ message: "Ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//evaluation deleting function
const deleteEvaluation = async (req, res) => {
  let evaluation;
  try {
    evaluation = await Evaluation.findById(req.params.id);
    await evaluation.remove();
    return res.status(200).json({ message: "Evaluation deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addEvaluation = addEvaluation;
exports.getEvaluation = getEvaluation;
exports.getOneEvaluation = getOneEvaluation;
exports.updateEvaluation = updateEvaluation;
exports.deleteEvaluation = deleteEvaluation;
