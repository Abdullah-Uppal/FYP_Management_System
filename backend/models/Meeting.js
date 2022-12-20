const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const MeetingSchema = new Schema({
  group: { type: Schema.Types.ObjectId, ref: "Group" },
  committee: { type: Schema.Types.ObjectId },
  location: { type: String, required: true },
  time: { type: Date, required: true },
  happened: { type: Boolean, default: false }
});

module.exports = mongoose.model("Meeting", MeetingSchema);