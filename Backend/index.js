import express from "express";
import mysql from "mysql";

const app = express();

//Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rp19970520",
    database: "layout_index_ass"
})

app.get("/book" , (req,res)=>{
    res.json("Hellow");
});

app.listen(8800, ()=>{
    console.log("Connected 0")
});