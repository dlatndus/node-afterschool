let express = require('express');
let ejs = require('ejs');
let app = express();
let path = require('path');
let mysql = require('mysql');



let MongoClient = require('mongodb').MongoClient;


var database;

function connectDB(){
    
let dbUrl = 'mongodb://127.0.0.1:27017/local';
  MongoClient.connect(dbUrl, (err, db)=>{
if(err)throw err;

    database = db;


});  
}

app.get("/login", (req, res)=>{
    console.log('/login');
    res.render('login');
})


