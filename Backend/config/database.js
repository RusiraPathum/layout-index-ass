const mysql = require("mysql");

//Database Connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"19970520",
    database:"layout_index_ass",
    port: "3306"
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });

module.exports = db;