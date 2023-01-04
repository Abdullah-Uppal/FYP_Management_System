const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CommitteeSchema = new Schema({
  members: { type: [ Schema.Types.ObjectId ], ref: "Supervisor" }
});


module.exports = mongoose.model("Committee", CommitteeSchema);