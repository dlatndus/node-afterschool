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

/*
let todoArr = [
    {id:1, contents:'영화보기', yesno:'no'},
    {id:2, contents:'놀기', yesno:'no'},
    {id:3, contents:'자기', yesno:'no'},
    {id:4, contents:'쉬기', yesno:'no'},
    
];
*/

let todoArr =[];
let count = 1;

app.use(express.static('public')); //public 폴더 공유
app.use(express.urlencoded({extended:false})); //사용자
app.set('views', path.join(__dirname, 'views')); //뷰 폴더 지정
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    console.log('/ get이 시작됨');
    dbconn.connect();
    dbconn.query('select * from todotbl', (err, result)=>{
        if(err){
            console.log('db select error' + err);
        }
        else{
            console.log(result);
            res.render('list', {datalist:result});
        }
    });

    dbconn.end();
});

/*
app.get('/insert', (req, res)=>{
    console.log('/ insert get이 시작됨');
    res.render('insert')
    res.redirect("/");
});

app.post('/insert', (req, res)=>{
    console.log('/ insert post이 시작됨');
   todoArr.push({contents: req.body.contents, yesno:req.body.yesno});

    let id_num = count++;
    todoArr.push({id:id_num, contents:req.body.contents, yesno:req.body.yesno})
    res.redirect("/");
});

app.get('/delete/:id', (req, res)=>{
    console.log('/delete' + req.params.id);

    for(const i in todoArr){
        if(todoArr[i].id == req.params.id){
            todoArr.splice(i, 1);
            console.log("delete ok~~" +i);
        }
    }
    
    
    res.redirect("/");


});

app.get('/edit/:id', (req, res)=>{
    console.log('/edit' + req.params.id);
    let editdata = [];
    
    for(const i in todoArr){
        if(todoArr[i].id == req.params.id){
            console.log("edit~~" + req.params.id);
            editdata = todoArr[i];
            res.render('edit', {data : editdata});
        }
    }


});

app.post('/edit/:id', (req, res)=>{
    console.log('/edit' + req.params.id);
    let editdata = [];
    
if(req.body.contents && req.body.yesno){
    console.log("수정값 : " +req.body.contents + "   " +   req.body.yesno)
}
    for(const i in todoArr){
        if(todoArr[i].id == req.params.id){
            console.log("edit~~" + res.id);
            todoArr.splice(i, 1, {id:req.params.id, contents:req.body.contents, yesno: req.body.yesno})
        }
    }
    res.redirect("/");

});
*/

app.listen(3000, ()=>{
    console.log("3000포트 서버가 시작됨");
})