const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
title
degreeType
department
isDeleted
*/

const DegreeSchema = new Schema({
  title: { type: String, required: true, min: 1 },
  degreeType: { type: String, enum: ["BS", "MS"] },
  department: { type: Schema.Types.ObjectId, required: true, ref: "Department" },
  isDeleted: { type: Boolean, default: false },
  
  // status if for what?????????
  // status: { type: Boolean, default: false }

});

const Degree = mongoose.model("Degree", DegreeSchema);