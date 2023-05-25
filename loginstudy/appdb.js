let express = require('express');
let ejs = require('ejs');
let app = express();
let path = require('path');
let mysql = require('mysql');

let dbconn = mysql.createConnection({
    user:'root',
    password:'1234',
    database:'mirimdb'
})

app.use(express.static('public'));
app.use(express.urlencoded( {extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/get 시작');

    dbconn.query('select * from login', (err, results) => {
        if(err) {
            console.log('db select error' + err);
        } else {
            console.log(results);
            res.render('list', {datalist: results});
        }
    });
});

app.get('/userinsert', (req, res) => {
    console.log('insert get');
    res.render('insert'); //insert.ejs  userinsert
});

// insert url post 방식
app.post('/userinsert', (req, res) => {
    console.log('insert get');
    dbconn.query('insert into login(id, pass, name, tel, email) values (?, ?, ?, ?, ?)', [req.body.id, req.body.pass, req.body.name, req.body.tel, req.body.email], (err, results) => {
        if(err) {
            console.log('db insert error' + err);
        } else {
            console.log(`insert ok ${req.body.id} ${req.body.pass} ${req.body.name} ${req.body.tel} ${req.body.email}`);
            res.redirect('/');
        }
    })
})

app.listen(3000, () => {
    console.log("3000 서버가 시작");
});