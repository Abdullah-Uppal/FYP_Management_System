const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ProjectSchema=new Schema({
  title: { type: String, required: true },
  description: { type: String },
  isAccepted: { type: Boolean, default: false },
  postedBy: { type: Schema.Types.ObjectId, refPath: "modelType" },
  acceptedRejectedBy: { type: Schema.Types.ObjectId, refPath: "modelType" },
  modelType: { type: String, enum: ["Person", "Supervisor"] },
});

module.exports = mongoose.model("Project", ProjectSchema);


