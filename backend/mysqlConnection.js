const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "127.0.0.1:3306",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: "public",
})

export default connection
