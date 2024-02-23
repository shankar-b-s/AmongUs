import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import {connection} from "./config.js";


const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));


var data = {
  "s1d1" : 40,
  "s2d1" : 40,
  "s3d1" : 40,
  "s4d1" : 40,
  "s1d2" : 40,
  "s2d2" : 40,
  "s3d2" : 40,
  "s4d2" : 40,
};

const maindata = {
  "22BCE0375" : "Khushi Sikaria",
  "22BCE0510" : "Gagan N Bangaragiri",
  "22BCE0791" : "Harsh Kumar Sinha",
  "22BCT0075" : "Shankar B S",
  "22BCI0235" : "Suryansh Goyal",
  "22BKT0021" : "Irshadali",
  "22BCE3037" : "Sameer Palkar",
  "22MIS0121" : "Kavyashree Saikia",
  "22BCE2906" : "Aradhye Swarup",
  "22BCT0382" : "Urza Rai",
  "22BEE0190" : "Anant Agrawal",
  "22BCE2485" : "Ved Kulkarni",
  "22BCE3644" : "Vikas Nagendra Kumar Chaurasia",
  "22BCE3159" : "Keshav", 
  "22BCE2506" : "Navkanj Sharma",
  "22BCE2394" : "Yuvraj Kr",
  "22BCE0751" : "Jaineel Sampat",
  "22BCE3629" : "Nipun Misra",
  "22BCB0115" : "Dhanashree Chandratre",
  "22BCE3508" : "Tanya Bhardwaj",
  "22BCE0409" : "Tanisha Pahwa",
  "22BML0029" : "Shivani Prasad",
  "22BCE2766" : "Sanjana R"
};

function CheckData(mydata,regno,name){
  var flag = 0;
  for(const [key,value] of Object.entries(mydata)){
    if(key.toUpperCase() == regno && value.toUpperCase() == name){
      flag++;
      console.log(key);
    }
  }
  if(flag>0){
    return true;
  }else{
    return false;
  }
}

app.get("/" , (req,res) =>{
  // res.sendFile(__dirname+"/public/main.html");
  
  res.render(__dirname+"/public/main.ejs",data);
  
});


app.post("/submit" , (req,res)=> {
  console.log(req.body);
  var PName = req.body.name;
  var PRegNo = req.body.regno;
  var Pslot = req.body.grp1;
  console.log(PName,PRegNo,Pslot);
  if(PName == undefined || Pslot == undefined || PRegNo == undefined){
    res.send(`<script>alert("Enter all the feilds ");</script>`);
    res.redirect("/");
  }
  PName = PName.toUpperCase();
  PRegNo = PRegNo.toUpperCase();
  Pslot = Pslot.toLowerCase();
  var obj = {
    "Name" : PName,
    "RegNo" : PRegNo,
    "Slot" : Pslot
  };

  console.log(CheckData(maindata,obj.RegNo,obj.Name));

  if(CheckData(maindata,obj.RegNo,obj.Name)){
    var sqlq = "SELECT * FROM responses WHERE RegNo = '" + PRegNo + "'";
    connection.query(sqlq,(err,result)=>{
      if(err){
        console.log("Select command failed.");
      }else{
        if(result[0]!=undefined){
         
        if(PRegNo === result[0].RegNo){
          res.send(`<script>alert("Registration is Duplicate");</script>`);
        }
      }
        else{
          if(data[obj.Slot]>0){
          var sqlI="INSERT INTO responses VALUES ('" + obj.RegNo +"','"+ obj.Name +"','" + obj.Slot +"');";
          connection.query(sqlI,(err,result)=>{
              data[obj.Slot]--;
              res.send(`<script>alert("Registration successful");</script>`); 
          })
        }
        else{
          res.send(`<script>alert("Slots For this time is over try another ");</script>`);
        }
        }
      }
    });
  }else{
    res.send(`<script>alert("Registration Not Found For the Event");</script>`);
  } 
});

app.listen(port , ()=>{
  console.log(`Listening of ${port}.`);
});