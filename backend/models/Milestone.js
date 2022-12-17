const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
description
deadline
status
*/

const MilestoneSchema = new Schema({
  description: { type: String, required: true },
  deadline: { type: Date, required: true },

  // status if for what?????????
  
  // status: { type: Boolean, default: false }
});

const Milestone = mongoose.model("Milestone", MilestoneSchema);