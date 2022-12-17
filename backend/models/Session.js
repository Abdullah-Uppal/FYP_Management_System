const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const SessionSchema = new Schema({
  degree: { type: Schema.Types.ObjectId, ref: "Degree" },
  title: { type: String }, 
  year: { type: Number, required: true }
});

const Session = mongoose.model("Session", SessionSchema);