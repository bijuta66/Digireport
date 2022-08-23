const express=require("express");
const Report=require("../models/ReportModel");
const router=new express.Router();
const auth =require("../Auth/patientAuth");

//to insert menu by admin//by staffs
router.post('/report/insert',function (req,res) {
    const disease = req.body.disease;
    const medicine = req.body.medicine;
    const recomendation = req.body.recomendation;
    const doctorname = req.body.doctorname;
    const data = new Report({
        disease: disease,
        medicine: medicine,
        recomendation: recomendation,
        doctorname: doctorname

    })


    data.save().then(function(){
        res.json({msg:"added"})
    })
    .catch(function(){
        res.json(e)
    })
   

})

router.get("/report/view",  function(req,res){
    Report.find().then(function(result){
        console.log(result)
        res.json(result)
    })
    .catch(function(){
        res.json({message : "ok invalid"})
    })
})

// to view single items at a time

router.get("/report/singlemenu/:mid", function(req,res){
    const mid = req.params.mid;
    Report.find({_id:mid}).then(function(result){
        console.log(result);
        res.json(result)
    })
    .catch(function(){
        res.json({message : "ok invalid"})
    })
})


router.put("/report/update/:mid", function (req, res) {
    
    const mid = req.params.mid;
    console.log(mid)
    Report.findByIdAndUpdate(mid,{$set:req.body})

        .then(function () {
            res.json({ msg: "updated " })
        })
        .catch(function () {
            res.json({ msg: "Try again" })
        })
})

// delete item
router.delete("/report/delete/:mid", function (req,res) {
    const mid=req.params.mid;
    Report.deleteOne({_id:mid})
     .then(function(){
         res.json({msg:"Deleted"})

     })
     .catch(function(){
         res.json({msg:"Try Again"})
     })
    })


module.exports=router;


