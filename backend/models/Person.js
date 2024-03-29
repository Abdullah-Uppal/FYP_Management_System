const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PersonSchema=new Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    regno:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
       
    },
    password:{
        type:String,
        required:true
    }

});


module.exports = mongoose.model("Person", PersonSchema);

