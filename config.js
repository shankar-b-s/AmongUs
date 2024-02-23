import mysql from "mysql";

export var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'devish22kar',
  database : 'AmongUs'

});

