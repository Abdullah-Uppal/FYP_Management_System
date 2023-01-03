const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DepartmentSchema=new Schema({
    title:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Department", DepartmentSchema);

