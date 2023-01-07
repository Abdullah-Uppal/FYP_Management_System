const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AdminSchema=new Schema({
    name:{
        type:String,
        default:"Admin",
        required:true
    },
    email:{
        type:String,
        default:"fypmanagement20@gmail.com",
        required:true
    },
    password:{
        type:String,
        default:"admin123",
        required:true
    }

});


module.exports = mongoose.model("Admin", AdminSchema);