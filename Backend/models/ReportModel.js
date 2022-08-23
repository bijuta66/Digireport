const mongoose=require("mongoose");


const Report =mongoose.model('Report',{
   
   
    disease:{
        type: String
    },
    medicine:{
        type: String
    },
    recomendation:{
        type:String
    },
    doctorname:{
        type:String
    },

   
   
   

})
module.exports = Report;