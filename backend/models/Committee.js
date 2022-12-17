const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CommitteeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  isDeleted: { type: Boolean, default: false }
});

const Committee = mongoose.model("Committee", CommitteeSchema);

