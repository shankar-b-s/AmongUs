import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));


app.post("/submit" , (req,res)=> {
  console.log(req.body);
});

app.listen(port , ()=>{
  console.log(`Running on server ${port}.`);
});