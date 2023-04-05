const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    Fname:{
        type:String,
        required:true,
    },
    Lname:{
        type:String,
        required:true,
    },
    Email:{
        type: String, 
        required: true, 
    },
    password:{
        type: String, 
        required: true 
    }
})

module.exports=mongoose.model('User', UserSchema);