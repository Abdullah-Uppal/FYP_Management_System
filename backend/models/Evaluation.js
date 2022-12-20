const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// needs improvements
const EvaluationSchema = new Schema({
  name: { type: String, required: true }, 
  totalMarks: { type: Number, required: true },
  totalWeightage: { type: Number, required: true },
  project: { type: Schema.Types.ObjectId, ref: "Project" }
});


module.exports = mongoose.model("Evaluation", EvaluationSchema);