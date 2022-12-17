const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const GroupSchema = new Schema({
  createdOn: { type: Date, default: Date.now, required: true },
  isDeleted: { type: Boolean, default: false }
  // status is for what???
});

const Group = mongoose.model("Group", GroupSchema);
