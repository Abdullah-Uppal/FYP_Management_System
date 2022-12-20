const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const GroupSchema = new Schema({
  project:  { type: Schema.Types.ObjectId, ref: "Project" },
  students: { type: [ Schema.Types.ObjectId ], ref: "Person", min: 2, max: 5 },
  advisors: { type: [ Schema.Types.ObjectId ], ref: "Supervisor", min: 2, max: 2 },
});

module.exports = mongoose.model("Group", GroupSchema);