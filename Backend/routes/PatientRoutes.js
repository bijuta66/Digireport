
const express=require("express");
const Patient=require("../models/PatientModel");
const auth=require("../Auth/patientAuth");
const jwt=require("jsonwebtoken");
const bcryptjs=require("bcryptjs");
const router=new express.Router();



//route for regestration
router.post("/patient/register",function(req,res){
    console.log("hello");
    const username=req.body.username;
    Patient.findOne({username : username}).then(function(patientData){
        if(patientData!=null){
            res.json({messege:"username already exists!"})
            return;
        }
        //now it mean we r ready to register.
        const firstname=req.body.firstname;
        const lastname=req.body.lastname;
        const password=req.body.password;
        bcryptjs.hash(password,10,function(e,hashed_pw){
           
            const phone =req.body.phone;
            const address =req.body.address;
            const email=req.body.email;
            const data=new Patient({
                username:username,
                password:hashed_pw,
                firstname:firstname,
                lastname:lastname,
                phone: phone,
                address:address,
                email:email
            })
            data.save()
            .then(function(){
                res.json({messege:"Registration done succesfully!!"})
            })
            .catch(function(e){
                res.json(e)
            })
        })
    })
})


router.post("/patient/login",function(req,res){
    // console.log("logged in")
    const username= req.body.username;
    //select*from staff where username="admin".
    Patient.findOne({username:username})
    .then(function(patientData){
       // console.log(staffData);
        if (patientData==null){
            return res.json({messege:"invalid"})
        }
        //need to check password
        const password =req.body.password;
        bcryptjs.compare(password,patientData.password,function(e,result){
            //true-correct password,false -incorrect password.
            if(result==false){
                return res.json({messege:'invalid!!'})
            }
            console.log(patientData);
            // ticket generate-jsonwebtoken
            const token= jwt.sign({StID:patientData._id},"anysecretkey");
            res.json({token:token,messege:"success!!!"});
        })
    })
})

   






module.exports=router;