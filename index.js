import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { connection } from "./config.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
var a = [];
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var data = {
  s1d1: 40,
  s2d1: 40,
  s3d1: 40,
  s4d1: 40,
  s1d2: 40,
  s2d2: 40,
  s3d2: 40,
  s4d2: 40,
};

let maindata = {
  "22BCE0375": "Khushi Sikaria",
  "22BCE0510": "Gagan N Bangaragiri",
  "22BCE0791": "Harsh Kumar Sinha",
  "22BCT0075": "Shankar B S",
  "22BCI0235": "Suryansh Goyal",
  "22BKT0021": "Irshadali",
  "22BCE3037": "Sameer Palkar",
  "22MIS0121": "Kavyashree Saikia",
  "22BCE2906": "Aradhye Swarup",
  "22BCT0382": "Urza Rai",
  "22BEE0190": "Anant Agrawal",
  "22BCE2485": "Ved Kulkarni",
  "22BCE3644": "Vikas Nagendra Kumar Chaurasia",
  "22BCE3159": "Keshav",
  "22BCE2506": "Navkanj Sharma",
  "22BCE2394": "Yuvraj Kr",
  "22BCE0751": "Jaineel Sampat",
  "22BCE3629": "Nipun Misra",
  "22BCB0115": "Dhanashree Chandratre",
  "22BCE3508": "Tanya Bhardwaj",
  "22BCE0409": "Tanisha Pahwa",
  "22BML0029": "Shivani Prasad",
  "22BCE2766": "Sanjana R",
};

function CheckData(mydata, regno, name) {
  var flag = 0;
  for (const [key, value] of Object.entries(mydata)) {
    if (key.toUpperCase() == regno && value.toUpperCase() == name) {
      flag++;
      console.log(key);
    }
  }
  if (flag > 0) {
    return true;
  } else {
    return false;
  }
}

app.get("/", (req, res) => {
  res.render(__dirname + "/views/main.ejs");
});

app.get("/admin/auth/1007", (req, res) => {
  res.render(res.render(__dirname + "/views/adminAuth.ejs"));
});
app.get("/reg", (req, res) => {
  res.render(res.render(__dirname + "/views/reg.ejs"));
});
app.get("/slots", (req, res) => {
  res.render(res.render(__dirname + "/views/slots.ejs"));
});
app.get("/instuctions", (req, res) => {
  res.render(__dirname + "/views/instruction.ejs");
});

app.post("/reg", async (req, res) => {
  var PName = req.body.name;
  console.log(PName);
  if (PName == undefined || PName.trim() === "") {
    res.redirect("/");
  } else {
    a.push(PName);
    res.render(__dirname + "/views/reg.ejs");
  }
});
app.post("/admin/auth/1007", (req, res) => {
  let password = req.body.password;
  let myPass = "AmongMeand@ISTE";
  console.log(myPass);
  if (password == myPass) {
    res.render(__dirname + "/views/admin.ejs");
  } else {
    res.redirect("/");
  }
});
app.post("/admin/1007", (req, res) => {
  let newName = req.body.newname;
  let newReg = req.body.newreg;
  if (
    newName == undefined ||
    newName == "" ||
    newReg == "" ||
    newReg == undefined
  ) {
    res.redirect("/");
  } else {
    maindata[newReg] = newName;
    console.log(maindata);
    res.send("sucess");
  }
});
app.post("/instruction", (req, res) => {
  var PRegNo = req.body.regno;
  console.log(PRegNo);
  if (PRegNo == undefined || PRegNo.trim() === "") {
    res.redirect("/reg");
  } else {
    a.push(PRegNo);
    res.render(__dirname + "/views/instruction.ejs");
  }
});
app.post("/slots", (req, res) => {
  res.render(__dirname + "/views/slots.ejs", data);
});

var msg = "";

app.post("/err", (req, res) => {
  res.redirect("/");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  console.log("This is a " + a);
  var PNameN = a[a.length - 2];
  var PRegNoN = a[a.length - 1];
  var Pslot = req.body.grp1;
  if (Pslot == undefined || Pslot == "") {
    res.redirect("/slots");
  }
  PNameN = PNameN.toUpperCase();
  PRegNoN = PRegNoN.toUpperCase();
  Pslot = Pslot.toLowerCase();
  var obj = {
    Name: PNameN,
    RegNo: PRegNoN,
    Slot: Pslot,
  };

  console.log(CheckData(maindata, obj.RegNo, obj.Name));

  if (CheckData(maindata, obj.RegNo, obj.Name)) {
    var sqlq = "SELECT * FROM responses WHERE RegNo = '" + obj.RegNo + "'";
    connection.query(sqlq, (err, result) => {
      if (err) {
        console.log(err);
        console.log("Select command failed.");
      } else {
        if (result[0] != undefined) {
          if (PRegNoN === result[0].RegNo) {
            a = [];
            msg = {
              message1: "Registration is Duplicate ",
              message2: "You are already Registered",
              message3: "Click on the button below to go to home page ",
            };
            res.redirect("/err");
          }
        } else {
          if (data[obj.Slot] > 0) {
            var sqlI =
              "INSERT INTO responses VALUES ('" +
              obj.RegNo +
              "','" +
              obj.Name +
              "','" +
              obj.Slot +
              "');";
            connection.query(sqlI, (err, result) => {
              data[obj.Slot]--;
              a = [];
              res.render(__dirname + "/views/submit.ejs", data);
            });
          } else {
            a = [];
            msg = {
              message1: "Slots For this time are over ",
              message2: "Try Slot for different timing",
              message3: "Click on the button below to go to home page ",
            };
            res.redirect("/err");
          }
        }
      }
    });
  } else {
    a = [];
    msg = {
      message1: "Registration Not Found For the Event",
      message2: "Check and fill your details carefully",
      message3: "Click on the button below to go to home page ",
    };
    res.redirect("/err");
    res.send(`<script>alert("Registration Not Found For the Event");</script>`);
  }
});
app.get("/err", (req, res) => {
  res.render(__dirname + "/views/err.ejs", msg);
});

app.listen(port, () => {
  console.log(`Listening of ${port}.`);
});
