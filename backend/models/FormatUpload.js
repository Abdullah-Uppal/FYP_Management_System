const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FormatUploadSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model("FormatUpload", FormatUploadSchema);