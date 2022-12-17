const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const GroupProjectSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: "Project" }, 
  group: { type: Schema.Types.ObjectId, ref: "Group" },
  assignmentDate: { type: Date, default: Date.now,required: true },
  // status is for what???
});

const GroupProject = mongoose.model("GroupProject", GroupProjectSchema);