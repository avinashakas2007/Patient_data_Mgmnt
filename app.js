const express=require('express');
const app=express();
const ejs=require('ejs');
app.set("view engine","ejs");
app.use(express.static('public'));

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const md5=require('md5');
require('dotenv').config();


const mongoose=require('mongoose');
const { genSalt } = require('bcrypt');
mongoose.connect(process.env.url,{useNewUrlParser:true,useUnifiedTopology:true});

const userSchema=new mongoose.Schema({
    username:String,
    password:String
});

const User=new mongoose.model("User",userSchema);

const dataSchema=new mongoose.Schema({
   UniqueNo:Number,
   Name:String,
   DateOfBirth:String,
   Gender:String,
   Emergency1rel:String,
   EmergencyNumber1:Number,
   Emergency2rel:String,
   EmergencyNumber2:Number,
   InsuranceCompany:String,
   PolicyNumber:String,
   BloodGroup:String,
   BloodPressure:String,
   Diabetic:String,
   PastIllness:String,
   SurgeryHistory:String,
   Allergy:String,
   DateOfUpdate:String
});
const Data=new mongoose.model("data",dataSchema);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/Dashboard.html",(req,res)=>{
    res.sendFile(__dirname+"/Dashboard.html");
})

app.post("/",(req,res)=>{
    const typedUserName=req.body.user;
    const typedPassword=md5(req.body.pass);
    User.findOne({username:typedUserName}).then((result)=>{
        if(result){
            if(result.password === (typedPassword)){
                res.redirect("/Dashboard.html");
            } else {
                res.send("Incorrect UserName or Password")
            }
        } 
    }).catch((err)=>{
        console.log(err);
        res.send("An error occurred");
    });
});


app.post("/Dashboard.html",(req,res)=>{
    Data.findOne({UniqueNo:Number(req.body.uniqueid)}).then((result)=>{
        if(result){
            res.render("list",{Name:result.Name,DateOfBirth:result.DateOfBirth,Gender:result.Gender,Emergency1rel:result.Emergency1rel,EmergencyNumber1:result.EmergencyNumber1,Emergency2rel:result.Emergency2rel,EmergencyNumber2:result.EmergencyNumber2,InsuranceCompany:result.InsuranceCompany,PolicyNumber:result.PolicyNumber,BloodGroup:result.BloodGroup,BloodPressure:result.BloodPressure,Diabetic:result.Diabetic,PastIllness:result.PastIllness,SurgeryHistory:result.SurgeryHistory,Allergy:result.Allergy,DateOfUpdate:result.DateOfUpdate})
        }
        else{
            res.send("Incorrect UniqueId")
        }
    }).catch((err)=>{
        console.log("err");
        console.log("Error in Acessing users data");
    })
})

app.listen(3000,()=>{
    console.log("Connected to port 3000");
})


//asdfghj