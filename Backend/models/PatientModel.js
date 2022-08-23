const mongoose=require("mongoose");
const Patient = mongoose.model('Patient',{
    username:{
        type: String
    },
    password:{
        type: String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    }

})
module.exports = Patient;