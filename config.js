import mysql from "mysql";
import { env } from "process";
export const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as per your requirements
  host: env.DB_HOST || "localhost",
  user: env.DB_USER || "root",
  password: env.DB_PASSWORD || "123456789",
  database: env.DB_DATABASE || "amongus",
});
