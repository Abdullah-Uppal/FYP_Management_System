const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
title,
description,
isDeleted,
status,
postedBy, // isko v khalli vali karwao
acceptOrRejectBy  // farigh hai
*/

const ProjectSchema = new Schema({
  title: { type: String, required: true, min: 1 },
  description: { type: String, min: 1 },
  isDeleted: { type: Boolean, default: false },
  isAccepted: { type: Boolean, default: false },

  acceptedRejectedBy: { type: Schema.Types.ObjectId, refPath: "modelType" },
  modelType: { type: String, enum: ["Admin", "Teacher"] }
  
  // status if for what?????????
  // status: { type: Boolean, default: false }

});

const Project = mongoose.model("Project", ProjectSchema);