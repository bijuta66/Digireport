const mongoose=require("mongoose");
const Admin = mongoose.model('Admin',{
    username:{
        type: String
    },
    password:{
        type: String
    },
    Firstname:{
        type:String
    },
    Lastname:{
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
    },
    anadmin:{
        type:Boolean,
        default:true
    },
    // timestamps:true
   

})


module.exports = Admin;