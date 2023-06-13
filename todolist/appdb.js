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

let todoArr = [];
let count = 1;


app.use(express.static('public'));
app.use(express.urlencoded( {extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/get 시작');
    //dbconn.connect();
    dbconn.query('select * from todotbl', (err, results) => {
        if(err) {
            console.log('db select error' + err);
        } else {
            console.log(results);
            res.render('list', {datalist: results});
        }
    });
    //dbconn.end();
});
// insert url get 방식
app.get('/api/insert', (req, res) => {
    console.log('insert get');
    res.render('insert'); //insert.ejs
})
// insert url post 방식
app.post('/insert', (req, res) => {
    console.log('insert get');
    dbconn.query('insert into todotbl(id, contents, yesno) values (null, ?, ?)', [req.body.contents, req.body.yesno], (err, results) => {
        if(err) {
            console.log('db insert error' + err);
        } else {
            console.log(`insert ok ${req.body.contents} ${req.body.yesno}`);
            res.redirect('/');
        }
    })
})

app.get('/delete/:id', (req,res)=>{
    dbconn.query('delete from todotbl where id = ?',
    [req.params.id],
    (err, results)=>{
        if(err)
            console.log('delete err '+err);
        else{
            console.log(`delete OK... ${req.params.id}`);
        }
    });
});

app.get('/edit/:id', (req, res)=>{
    dbconn.query('select * from todotbl where id = ?',
    [req.params.id], 
    (err, results)=>{
        if(err)
            console.log('edit err '+err);
           else{
            console.log(`edit OK... ${req.params.id}`);
            res.render('edit', {data:results[0]});
        }
    })
})

app.post('/edit/:id', (req,res)=>{
    dbconn.query('update todotbl set contents = ?, yesno = ? where id = ?',
    [req.params.contents, req.body.yesno, req.body.id], 
    (err, results)=>{
        if(err)
            console.log('edit err '+err);
        else{
            console.log(`edit update ok ${req.params.id}`);
            res.redirect('/');
        }
    }); 
})

app.listen(3000, () => {
    console.log("3000 서버가 시작");
});