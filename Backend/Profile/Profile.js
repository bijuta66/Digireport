const express =require("express");
const Patient=require("../models/PatientModel");
const auth=require("../Auth/Adminauth");
const req = require("express/lib/request");
const Admin = require("../models/AdminModel");


//const Admin=require("../models/AdminModel");
const router =new express.Router();




 //to show  patient/Profile by admin
 router.get("/patient/profile/",  function(req,res){
    const sid=req.params.id;

    Patient.find({_id:sid}).then(function(result){
        console.log(result)
        res.json(result)
    })
    .catch(function(){
        res.json({message : "ok invalid"})
    })
})

router.get("/admin/profile/:aid", function (req, res) {

    const aid = req.params.id;

    console.log(aid)

    console.log("viewing Admin profile Reached")

    Admin.find({ _id: aid }).then(function (result) {
        console.log(result)
        res.json(result)

    })
        .catch(function () {
            res.json({ message: "admin invalid" })
        })

})

// customer delete by admin

router.delete("/patient/delete/",function (req,res) {
    console.log("Data reached");
    //const id =req.adminInfo._id;
    // const id =req.staffInfo._id;
    const sid=req.body.sid;
    Patient.deleteOne({_id :sid})
     .then(function(){
         res.json({msg:"Deleted"})

     })
     .catch(function(){
         res.json({msg:"Try Again"})
     })

   


})

router.delete("/admin/delete/:aid", auth.verifyAdmin, function (req,res) {
    //console.log("Data reached");
    //const id =req.adminInfo._id;
    //const id =req.staffInfo._id;
    const aid=req.body.aid;
    Admin.deleteOne({_id :aid})
     .then(function(){
         res.json({msg:"Deleted"})

     })
     .catch(function(){
         res.json({msg:"Try Again"})
     })
    })


module.exports=router;