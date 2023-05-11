let express = require('express');
let ejs = require('ejs');
let app = express();
let path = require('path');

let todoArr = [
    {id:1, contents:'영화보기', yesno:'no'},
    {id:2, contents:'놀기', yesno:'no'},
    {id:3, contents:'자기', yesno:'no'},
    {id:4, contents:'쉬기', yesno:'no'},
    
];

app.use(express.static('public')); //public 폴더 공유
app.use(express.urlencoded({extended:false})); //사용자
app.set('views', path.join(__dirname, 'views')); //뷰 폴더 지정
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    console.log('/ get이 시작됨')
    res.render('list', {datalist : todoArr})//list.ejs 파일 출력


});

app.get('/insert', (req, res)=>{
    console.log('/ insert get이 시작됨');
    res.render('insert')
    res.redirect("/");
});

app.post('/insert', (req, res)=>{
    console.log('/ insert post이 시작됨');
   todoArr.push({contents: req.body.contents, yesno:req.body.yesno});
});

app.get('/delete/:id', (req, res)=>{
    console.log('/delete' + res.id);

    todoArr.splice(res.id, 1);
    console.log("delete ok~~" + res.id);
    res.redirect("/");


});

app.get('/edit/:id', (req, res)=>{
    console.log('/delete' + res.id);

    todoArr.splice(res.id, 1);
    console.log("delete ok~~" + res.id);
    res.redirect("/");


});

app.listen(3000, ()=>{
    console.log("3000포트 서버가 시작됨");
})