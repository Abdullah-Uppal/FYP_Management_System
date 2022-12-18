const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FormatUploadSchema = Schema({
    title:{
        type:String,
        required:false,
    },
    description:{
        type:String,
        required:false,
    },
    file:{
        type:String,
        required:false,
    },
});

module.exports = mongoose.model("FormatUpload", FormatUploadSchema);