import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import session from "express-session";
import { pool } from "./config.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
var name;
var a = [];
var regno;
var slot;
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

pool.on("error", function (err) {
  console.log("Database error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Reconnecting to the database...");
    pool.getConnection(function (err, connection) {
      if (err) {
        console.error("Error while reconnecting:", err);
      } else {
        console.log("Reconnected!");
        connection.release();
      }
    });
  } else {
    throw err;
  }
});

app.use(
  session({
    secret: "AmongMeand@ISTE",
    resave: false,
    saveUninitialized: true,
  })
);

var data = {
  s1d1: 40,
  s2d1: 0,
  s3d1: 24,
  s4d1: 0,
  s1d2: 35,
  s2d2: 8,
  s3d2: 23,
  s4d2: 23,
};

var maindata = {
  "22BCE0375": "Khushi Sikaria",
  "22BCE0409": "Tanisha Pahwa",
  "22BCE0791": "Harsh Kumar Sinha",
  "20BEC0481": "UTKARSH AMAR",
  "21BBT0005": "RUCHITA MAURYA",
  "21BBT0241": "GAYATHRI J",
  "21BCB0034": "NIHAL MAHANSARIA",
  "21BCB0219": "DUBEY MANAVI VEDPRAKASH",
  "21BCE0189": "VAISHNAVI GUPTA",
  "21BCE0240": "NAMAN GUPTA",
  "21BCE0349": "ADITI SINGH",
  "21BCE0536": "ANSHIKA GUPTA",
  "21BCE0635": "DALAL VANSH MITESH",
  "21BCE0665": "SHIVAM SHARMA",
  "21BCE0677": "KANAV GUPTA",
  "21BCE0699": "ADITYA AJAY IYER",
  "21BCE0713": "PRAJWAL SINHA",
  "21BCE2116": "SUJEY DASH",
  "21BCE2187": "PRATEEK GUPTA",
  "21BCE2219": "ISHI SINGH",
  "21BCE2234": "SARTHAK TANWAR",
  "21BCE2275": "AKSHITH THOTANTHILLA",
  "21BCE2314": "MISHTI RASTOGI",
  "21BCE2918": "HARSH SHARAN",
  "21BCE3622": "NISHTHA GUPTA",
  "21BCI0029": "AVIRAL SONI",
  "21BCL0100": "AYUSH ARYAM",
  "21BCL0152": "SAI DHRUTHI NAMA",
  "21BEC0160": "RUSHA MAITI",
  "21BEC0419": "MASETTY SRIJA",
  "21BEC0604": "ASHUTOSH AGRAWAL",
  "21BEC0702": "DHORIYANI URVA RAJNIKANT",
  "21BEC2102": "PRAISE ESTHER UMA L",
  "21BIT0549": "AKSHARA JAIN",
  "21BKT0065": "SURAJ KUMAR",
  "21BKT0093": "ARYAN SRIVASTAVA",
  "21BML0067": "PRATIKSHA MISHRA",
  "21BMM0059": "KOORAPATI PRANAVA",
  "21BMM0079": "ATUL AJANI",
  "22BBA0146": "JAIKRISHNAN K",
  "22BCE0219": "ANSHUMAN ARYAN",
  "22BCE0394": "SUDHARSAN A J",
  "22BCE0451": "SAITEJA S",
  "22BCE0593": "NIKHIL B S",
  "22BCE0617": "YASH BAJPAI",
  "22BCE0813": "PRAGYA",
  "22BCE0825": "Marmik Sandiphhai Jethwa",
  "22BCE2115": "GUNUPATI PAVAN KUMAR REDDY",
  "22BCE2171": "YASHASVI AGARWAL",
  "22BCE2231": "VARRSAN D",
  "22BCE2382": "KRISH VERMA",
  "22BCE2449": "JOANNA SUZAN BIJU",
  "22BCE3280": "TRIVIKRAM SAI KROVI ",
  "22BCE3324": "ADHYA PRASAD K A",
  "22BCE3338": "ABISHEK D",
  "22BCE3586": "SAMEER GANGWAR",
  "22BCE3600": "K V VENKATAKRISHNAN",
  "22BCE3897": "ALAHARI MOULYA SAI DHEERAJ",
  "22BEC0249": "VISHNU KRISHNAN",
  "22BEC0419": "SRINIDHI BALAJI",
  "22BEC0522": "ARYAN ANAND",
  "22BEC0546": "NEHA SUSAN ANIL",
  "22BEE0106": "IYER SHASHANK",
  "22BEE0165": "RADHESH KAPOOR",
  "22BEE0179": "SHREEJEET GANDHE",
  "22BEE0182": "SAUMYA MITTAL",
  "22BEE0184": "YASH CHOUDHARY",
  "22BEE0202": "TANUSHKA AGRAWAL",
  "22BEI0059": "GAURI CHANDAK",
  "22BEI0084": "SHREYA RANJAN",
  "22BEI0085": "AVNI BAGGA",
  "23BAI0001": "AGNIK PATRA",
  "23BAI0007": "VASUDEVAN KALYAN",
  "23BAI0019": "SOHOM PAIK",
  "23BAI0024": "KUSH AGRAWAL",
  "23BAI0030": "AAYANSH SRIVASTAVA",
  "23BAI0033": "VAIBHAV JAIN",
  "23BAI0096": "NIKHIL GAUR",
  "23BAI0100": "BHAVYE NIJHAWAN",
  "23BAI0101": "VANSH CHANI",
  "23BAI0103": "GRISHM GHOSH",
  "23BAI0128": "PRAGATI",
  "23BAI0142": "NIKHIL ARYA LINGA",
  "23BAI0155": "HIRAK NIKHIL PAREKH",
  "23BAI0158": "MAYANK",
  "23BAR0004": "ESHNA MOHANTY",
  "23BAR0013": "SHIVANI MUKHERJEE",
  "23BBS0018": "JASMINE KAUR BHATIA",
  "23BBS0074": "ARYAMAN GHAI",
  "23BBS0091": "RAKSHIT RATAN PATHAK",
  "23BBS0096": "ESHLOK AGARWAL",
  "23BBS0104": "KEERTHANA MUTHUPANDI",
  "23BBS0106": "PARV PACHOURI",
  "23BBS0116": "ARYAN",
  "23BBS0133": "SUDHANSHU BATRA",
  "23BBS0151": "NAMAN GUPTA",
  "23BBS0160": "DEVINA PATEL",
  "23BBS0162": "MALAVIKA ARJUN",
  "23BBS0171": "NETRA CHETAN PANCHAL",
  "23BBS0181": "NIHAL JAIN",
  "23BBT0009": "SARANYA KAPOOR",
  "23BBT0048": "OISHEE SHOWN",
  "23BBT0096": "ITISHA CHOUDHURY",
  "23BBT0120": "DIVYANSHI",
  "23BBT0136": "SHREEVARSHA S",
  "23BBT0172": "NIDHISH U",
  "23BBT0175": "ANKIT NEET DAS",
  "23BCB0016": "KHANAK SHAH",
  "23BCB0023": "HEMASHREE JELLI",
  "23BCB0059": "WAMIKA SEHGAL",
  "23BCB0069": "AVANTHIKA SREEKANTH HEGDE",
  "23BCB0074": "UPASANA BHAUMIK",
  "23BCB0147": "LABDHI KUMAR JAIN",
  "23BCE0007": "BHAVYA DHOOT",
  "23BCE0023": "VIHAN WADHAWAN",
  "23BCE0041": "AADYA KAPOOR",
  "23BCE0055": "SAWANT JIYA PRADEEP ",
  "23BCE0063": "CHETAN GROVER",
  "23BCE0072": "PRAGYA CHAUHAN",
  "23BCE0081": "SHIVAM CHANDRA",
  "23BCE0082": "AKHIL SINGH",
  "23BCE0086": "AYUSH RASTOGI",
  "23BCE0093": "SPARSH AGRAWAL",
  "23BCE0094": "TANISHQ GARG",
  "23BCE0114": "VAIBHAV GUPTA",
  "23BCE0138": "RADHIKA ASHISH KUNDNANI",
  "23BCE0164": "KHUSHI SHARMA",
  "23BCE0179": "KRITI MAHESHWARI",
  "23BCE0193": "SHREYA SINGH",
  "23BCE0249": "CHIRAYU SINGLA",
  "23BCE0252": "KOUSTHUB ESWAR REDDY GADIKOTA",
  "23BCE0306": "LIL NEHAN NADEEM",
  "23BCE0344": "PRIYANKA YADAV",
  "23BCE0349": "MOKSH PUNN",
  "23BCE0393": "ATHARV RAGHUNATH NAIK DESAI",
  "23BCE0414": "EKANSH KUMAR",
  "23BCE0435": "ANWESHA MAITIN",
  "23BCE0448": "AYUSHMAN MITTAL",
  "23BCE0474": "GURUMAUJ SATSANGI",
  "23BCE0481": "MUDIT AGARWAL",
  "23BCE0495": "ARYAMAN BHATT",
  "23BCE0499": "SHIVAM JHA",
  "23BCE0520": "SAJAL MAITREY",
  "23BCE0535": "RAGHAV AGRAWAL",
  "23BCE0593": "ANANYA JAIN",
  "23BCE0613": "RUHI HIREN DOSHI",
  "23BCE0626": "ISHANI PRIYARENJ",
  "23BCE0628": "ASTHA D KALITA",
  "23BCE0638": "AARYAN UPADHYAY",
  "23BCE0678": "ARUSHI BHAKUNI",
  "23BCE0700": "ADVAIT BHATTACHARYA",
  "23BCE0706": "SHUBHANGI GOYAL",
  "23BCE0736": "ARNAV SAXENA",
  "23BCE0769": "NEHAL KWATRA",
  "23BCE0785": "SHREYA SINGHAL",
  "23BCE0807": "ADARSH ANAND",
  "23BCE0809": "TITHI SHAH",
  "23BCE0813": "DIPIT MADAN",
  "23BCE0814": "ADITYA BHASHKAR",
  "23BCE0864": "AAKSHI BHADURI",
  "23BCE0865": "AKSHIT",
  "23BCE0875": "G PRANESH",
  "23BCE0878": "GURU CHARAN SIVAKUMAR",
  "23BCE0887": "UDBHAV MAKKAR",
  "23BCE0933": "HIRTISH ELANGOVAN",
  "23BCE0943": "OM DEEPAKKUMAR TILVA",
  "23BCE0951": "LANGDAPURE AYUSH NARAYANRAO",
  "23BCE0954": "VATSAL RAJ AGARWAL",
  "23BCE0965": "AGRANNYA SINGH",
  "23BCE0992": "AARAV RAINA",
  "23BCE2050": "LANKA SREE CHATHURYA",
  "23BCE2067": "RANJANI S",
  "23BCE2074": "SUHANI AGARWAL",
  "23BCE2100": "PRIYAL CHAMARIA",
  "23BCE2126": "SANIYA GOYAL",
  "23BCE2129": "PRADNYA SHARMA",
  "23BCE2145": "RAJVEERSINH CHAVDA",
  "23BCE2151": "SRIVAASS GANESAN ",
  "23BCE2178": "SARAH SUSAN GEORGE",
  "23BCE2241": "REENU BIJU",
  "23BCE2287": "REYANSH ASHOK",
  "23BCE2297": "DIVYA JULIET",
  "23BCE2309": "SIYATH AHEMED MUHAMAD NIMAATH",
  "23BCI0008": "RAGHAV SHARMA",
  "23BCI0013": "VEDANT AGARWAL",
  "23BCI0046": "MANAN ARORA",
  "23BCI0085": "PRATHAM LAL",
  "23BCI0087": "KRISHIKA SUREKA",
  "23BCI0148": "SWATIKA",
  "23BCI0195": "ANAMIKA SINGH",
  "23BCI0218": "ASHISH ANIL SIKARIA",
  "23BCI0233": "PARTH GUPTA",
  "23BCI0259": "SHLOK SAXENA",
  "23BCL0021": "PRATEEK KUMAR",
  "23BCL0031": "SHREEYANS TIWARI",
  "23BCL0043": "SANUJ SUDHAKAR DHOTE",
  "23BCM0005": "RAMADUGU SAI RUSHEEL",
  "23BCT0011": "ARCHIT TIWARI",
  "23BCT0023": "RAJAN HASIJA",
  "23BCT0032": "PRATISHTHA TAKJHARIA",
  "23BCT0042": "SACHINKUMAR S",
  "23BCT0046": "JEFFRY WINSON A",
  "23BCT0047": "NAINIKA ANISH",
  "23BCT0077": "KASHVI AGRAWAL",
  "23BCT0092": "TANISHKA SRIVASTAVA",
  "23BCT0115": "RIYA JAIN",
  "23BCT0131": "AATHITHAN S B",
  "23BCT0132": "VAJRAN KANNADASAN",
  "23BCT0133": "NAVDHA SHARMA",
  "23BCT0167": "ISHAAN NEGI",
  "23BCT0172": "NANDITHA NAIR",
  "23BCT0195": "RAJVANSH PAL",
  "23BCT0219": "ANA KHANDELWAL",
  "23BCT0242": "SATVIK SHARMA",
  "23BDS0001": "KUMAR DAKSHA RAJ",
  "23BDS0003": "NISHANTH P",
  "23BDS0036": "RIDHIMA JOSHI",
  "23BDS0037": "SRIHARSHITHA ANKAREDDY",
  "23BDS0038": "AKRITI AGARWAL",
  "23BDS0050": "RUCHIKA",
  "23BDS0062": "YASHWIN",
  "23BDS0077": "LISHA NASRE",
  "23BDS0079": "TANISI NARWAL",
  "23BDS0081": "VYOM KHURANA",
  "23BDS0097": "ABHINAV SHARMA",
  "23BDS0105": "PIYUSH RAJ",
  "23BDS0155": "ARCHI GARG",
  "23BDS0166": "RIDDHI PODDAR",
  "23BDS0212": "JESWANTH G",
  "23BDS0263": "CHITTIPOTULA HARSHITA",
  "23BDS0287": "YUKTHA SREENIVASA ANJANEYULU",
  "23BDS0296": "KESHAV ARORA",
  "23BDS0298": "SADHA PA",
  "23BDS0300": "SANCHI KHANDELWAL",
  "23BEC0038": "M SADURTHRAM",
  "23BEC0050": "MEGHA S METI",
  "23BEC0076": "JYOTSNA PILLAI RAGHAV",
  "23BEC0082": "SMRITI PRASAD",
  "23BEC0095": "MOITREYEE ESH CHOUDHURY",
  "23BEC0106": "HRITHIKA MURALEEDHARAN",
  "23BEC0110": "PRANAY V",
  "23BEC0126": "DIVYASHREE AYYAGARI",
  "23BEC0173": "ANAGHA S",
  "23BEC0187": "ABISHEK GURU M",
  "23BEC0343": "GANGISHETTY TEJASHWAN",
  "23BEC0345": "DEVI ABHIRAMI S",
  "23BEC0385": "JEROM JASON ASHOK",
  "23BEE0004": "HRISHITA DAS GUPTA",
  "23BEE0017": "RUPSA PATRA",
  "23BEI0008": "DEVANGSHI ROUT",
  "23BFN0009": "PRIYANKA BATHE LALBAHADUR",
  "23BFN0027": "T G GAYATHRI SAI",
  "23BFN0048": "AKSHITHA S",
  "23BIT0085": "KARTIKEY CHOUDHARY",
  "23BIT0086": "ISHAN AGARWAL",
  "23BIT0136": "ARNAV SHARMA",
  "23BIT0152": "ASHVIN MAVILA KANNOTH",
  "23BIT0328": "RAGHUNANDEESHWAR S",
  "23BIT0334": "NILAY KANT SHAHI",
  "23BIT0392": "LAVISHA AASWANI",
  "23BKT0005": "AKSHAT SINGH",
  "23BKT0010": "ANANYA GUPTA",
  "23BKT0018": "PATEL SIDDHIBEN KARTIKBHAI",
  "23BKT0029": "PUSHTI SINGH",
  "23BKT0033": "KUSHAL AGRAWAL",
  "23BKT0036": "MITANSH DHAWAN",
  "23BKT0045": "AKHYA SINHA",
  "23BKT0048": "JEEVESH MALHOTRA",
  "23BKT0122": "MANYA SHRIVASTAVA",
  "23BME0097": "NIMIT",
  "23BME0136": "CHINMAY GOYAL",
  "23BME0145": "GOKUL S",
  "23BME0187": "KEVIN JOMY",
  "23BME0297": "VATSAL KANT SINGH",
  "23BME0306": "VAIBHAV DAVE",
  "23BME0312": "YASHARYA MISHRA",
  "23BME0317": "HARIHARAN BALAJI",
  "23BME0318": "SHOUKRIT DEY",
  "23BME0323": "TANISH DUA",
  "23BME0341": "ARNAV AGARWAL",
  "23BME0351": "RITWIK JOSHI",
  "23BME0355": " GOVEKAR YASH PRAMOD",
  "23BME0363": "JASJEET SINGH",
  "23BME0490": "DARVEKAR ARNAV AMOL",
  "23BML0012": "SHUBHANGI SHANDILYA",
  "23BML0056": "GUNJAN KUMARI",
  "23BVD0031": "GARV BANSAL",
  "23BVD0042": "KASAT SANJALI SUMEET",
  "23MIC0097": "SAMRIDDHI SHARMA",
  "23MIC0127": "TANAY JAISWAL",
  "23MID0105": "VANSH ANAND",
  "23MID0115": "SYED SAIF SAMI",
  "23MID0123": "HIRTHIK ELANGOVAN",
  "23MID0126": "CATTAMANCHI VIDEESHA",
  "23MID0150": "RIYA  SUSAN SAMUEL",
  "23MID0197": "SRI SAHANA S",
  "23MID0340": "MUPPIRI TRINAY",
  "23MID0344": "AVINASH A",
  "23MID0375": "PRAGNA MADINENI JAYADEV",
  "23MIS0053": "KARTIKAY SINGH",
  "23MIS0172": "KRISH AHLAWAT",
  "23MIS0409": "DEEP P RAJA",
  "23MIY0049": "RIA ROHIT",
  "23MSI0180": "SHREE RAKSHA S",
};

app.get("/", (req, res) => {
  res.render(__dirname + "/views/welcome.ejs");
});

app.post("/name", (req, res) => {
  res.render(__dirname + "/views/main.ejs");
});
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

app.get("/admin/auth/1007", (req, res) => {
  res.render(__dirname + "/views/adminAuth.ejs");
});

var msg = "";

app.post("/err", (req, res) => {
  res.redirect("/");
});
app.post("/submit", (req, res) => {
  console.log(req.body.grp1 + "this is slot");

  var PNameN = req.body.name;
  var PRegNoN = req.body.regno;
  var Pslot = req.body.grp1;

  if (
    Pslot === undefined ||
    Pslot == "" ||
    PRegNoN == undefined ||
    PRegNoN.trim() === "" ||
    PNameN == undefined ||
    PNameN.trim() === ""
  ) {
    return res.render(__dirname + "/views/slots.ejs", data);
  }

  PNameN = PNameN.toUpperCase();
  PRegNoN = PRegNoN.toUpperCase();
  Pslot = Pslot.toLowerCase();
  PNameN = PNameN.trim();
  PRegNoN = PRegNoN.trim();
  var obj = {
    Name: PNameN,
    RegNo: PRegNoN,
    Slot: Pslot,
  };
  console.log(obj);

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
              req.session.data = data;
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
    msg = {
      message1: "Registration Not Found For the Event",
      message2: "Check and fill your details carefully",
      message3: "Click on the button below to go to home page ",
    };
    res.redirect("/err");
  }
});
app.get("/err", (req, res) => {
  res.render(__dirname + "/views/err.ejs", msg);
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

app.post("/slots", (req, res) => {
  res.render(__dirname + "/views/slots.ejs", data);
});

app.listen(port, () => {
  console.log(`Listening of ${port}.`);
});
