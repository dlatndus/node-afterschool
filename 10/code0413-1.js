let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/login',(req, res)=>{
    console.log('/get login start');
});

app.get('/student',(req, res)=>{
    console.log('/get student start');
});



app.post('/login', (req, res)=>{
    let id = req.body.id;
    let pass = req.body.password;
if(id == 'admin' && pass == '1234'){ 
    console.log('로그인 성공')
}
else{
    console.log('로그인 실패 다시 입력하십시오')
}

    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.password);
    res.send(req.body);
});

app.post('/student', (req, res)=>{
    let id = req.body.id;
    let pass = req.body.password;
if(id == 'admin' && pass == '1234'){ 
    console.log('로그인 성공')
}
else{
    console.log('로그인 실패 다시 입력하십시오')
}

    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.password);
    res.send(req.body);
});



app.listen(3000, ()=>{
    console.log("서버시작")
});