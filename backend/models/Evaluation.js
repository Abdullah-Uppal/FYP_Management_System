const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const EvaluationSchema = new Schema({
  name: { type: String, required: true }, 
  totalMarks: { type: Number, required: true },
  totalWeightage: { type: Number, required: true }
});

const Evaluation = mongoose.model("Evaluation", EvaluationSchema);