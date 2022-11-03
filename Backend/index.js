const express = require("express");
const mysql = require("mysql");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

//Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rp1997050",
    database: "layout_index_ass"
})

//Category route
app.use('/api/category', categoryRoutes);

app.listen(8800, ()=>{
    console.log("Connected 0")
});