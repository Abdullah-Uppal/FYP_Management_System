const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ProjectSchema=new Schema({
  title: { type: String, required: true },
  description: { type: String },
  proposalDocument: { type: String, required: true},
  isAccepted: { type: String, default: "Waiting", enum: ["Approved", "Rejected", "Waiting"] },
  postedBy: { type: Schema.Types.ObjectId, refPath: "modelType" },
  
  modelType: { type: String, enum: ["Person", "Supervisor"] },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", ProjectSchema);


