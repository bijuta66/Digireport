const express = require("express");
const Report = require("../models/ReportModel");
const router = new express.Router();
const auth = require("../Auth/Adminauth");
const Patient=require("../models/PatientModel");

//to insert report by admin//by patient
router.post('/report/insert', function (req, res) {
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


    data.save().then(function () {
        res.json({ msg: "added" })
    })
        .catch(function () {
            res.json()
        })


})
//to view report 
router.get("/report/view", function (req, res) {
    Report.find().then(function (result) {
        console.log(result)
        res.json(result)
    })
        .catch(function () {
            res.json({ message: "ok invalid" })
        })
})

// to view single items at a time

router.get("/report/singlereport/:mid", function (req, res) {
    const mid = req.params.mid;
    Report.find({ _id: mid }).then(function (result) {
        console.log(result);
        res.json(result)
    })
        .catch(function () {
            res.json({ message: "ok invalid" })
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
router.delete("/report/delete/:mid", function (req, res) {
    const mid = req.params.mid;
    Report.deleteOne({ _id: mid })
        .then(function () {
            res.json({ msg: "Deleted" })

        })
        .catch(function () {
            res.json({ msg: "Try Again" })
        })
})


router.post('/patient/insert',function (req,res) {
    const username=req.body.username;
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const phone =req.body.phone;
    const address =req.body.address;
    const email=req.body.email;

    const data = new Patient({
            username:username,
           
            firstname:firstname,
            lastname:lastname,
            phone: phone,
            address:address,
            email:email

    })


    data.save().then(function(){
        res.json({msg:"added"})
    })
    .catch(function(){
        res.json(e)
    })
   

})

router.get("/patient/view", function (req, res) {
    Patient.find().then(function (result) {
        console.log(result)
        res.json(result)
    })
        .catch(function () {
            res.json({ message: "ok invalid" })
        })
})

router.delete("/patient/delete/:sid", function (req, res) {
    const sid = req.params.sid;
    Patient.deleteOne({ _id: sid })
        .then(function () {
            res.json({ msg: "Deleted" })

        })
        .catch(function () {
            res.json({ msg: "Try Again" })
        })
})


// router.put("/patient/profile/update/:sid", function (req, res) {
    
//     const sid = req.params.sid;
//     console.log(sid)
//     Patient.findByIdAndUpdate(sid,{$set:req.body})

//         .then(function () {
//             res.json({ msg: "updated " })
//         })
//         .catch(function () {
//             res.json({ msg: "Try again" })
//         })
// })



module.exports = router;


