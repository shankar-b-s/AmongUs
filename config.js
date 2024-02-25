import mysql from "mysql";

export var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 123456789,
  database: "amongus",
});
