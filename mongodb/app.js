var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded( {extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var database;

function connectDB(){
    var databaseUrl = 'mongodb://localhost:270117/shopping';

    MongoClient.connect(databaseUrl, function(err, db){
        if(err) throw err;

        console.log("연결" + databaseUrl);
        database =db;
    })
}

http.createServer(app).listen(app.get('port'), function(){
    connectDB();
})