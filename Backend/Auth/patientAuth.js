const jwt=require("jsonwebtoken");
const Patient=require("../models/PatientModel");
module.exports.verifyPatient=function(req,res,next){  
    
    try{
    const tokens =req.headers.authorization.split(" ")[1];
    const data=jwt.verify(tokens,"anysecretkey");
    //console.log(data);
    //console.log(token);
    Patient.findOne({_id:data.StID})
    .then(function(result){
        //console.log(result);
        req.PatientInfo=result;
        next();
    })
    .catch(function(e){
        res.json({error:e})
    })
    }
    catch (e){
        res.json({error: "invalid Access"})
    }
}