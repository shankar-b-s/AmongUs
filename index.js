import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , (req,res) =>{
  res.sendFile(__dirname+"/public/main.html");
});

app.post("/submit" , (req,res)=> {
  console.log(req.body);
  var Name = req.body.name;
  var RegNo = req.body.regno;
  var slot = req.body.grp1;
  console.log(Name,RegNo,slot);
  var obj = {
    "Name" : Name,
    "RegNo" : RegNo,
    "Slot" : slot
  };
  
  console.log(obj);

  
});

app.listen(port , ()=>{
  console.log(`Listening of ${port}.`);
});