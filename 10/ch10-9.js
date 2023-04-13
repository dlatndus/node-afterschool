let express = require('express');
let app = express();

app.use(express.static('public'));//public 폴더에 있는 파일
app.use(express.json());//제이슨 데이터 활용
app.use(express.urlencoded({extended:false}));//폼 본문에 있는 데이터를 인코딩

//정적 파일 제공하는 폴더
app.get('/', (request, response)=>{
    let output ='';
    output += '<form method="post">';
    output += '<input type="text" name="id"/>';
    output += '<input type="text" name="password"/>';
    output += '<input type="submit"/>'
    output += '</form>'
    response.send(output);
});

app.post('*', (request, response)=>{
    console.log(request.body);
    response.send(request.body);
})

app.listen(3000, ()=>{
    console.log("서버시작")
});