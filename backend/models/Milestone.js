const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MilestoneSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  attachement: { type: String },
  project: { type: Schema.Types.ObjectId, ref: "Supervisor" }
});

const Milestone = mongoose.model("Milestone", MilestoneSchema);