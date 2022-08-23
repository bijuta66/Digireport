const express=require("express");
const app=express();


const cors =require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("./database/db");

const PatientRoutes=require("./routes/PatientRoutes");
app.use(PatientRoutes);

const profileroute=require("./Profile/Profile");
app.use(profileroute);


// const ppupdateroute=require("./update/ppupdate");
// app.use(ppupdateroute);

const Adminroutes=require("./routes/Adminroutes");
app.use(Adminroutes);

const viewmode=require("./Report/Adminreport");
app.use(viewmode);


const report =require("./Report/Report");
app.use(report);


app.listen ("90");


