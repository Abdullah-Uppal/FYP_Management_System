const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const DepartmentSchema = new Schema({
  name: { type: String, required: true, min: 1 },
  isDeleted: { type: Boolean, default: false },
});

const Department = mongoose.model("Department", DepartmentSchema);