let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.json());

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

app.post('/', (request, response)=>{
    console.log(request.body);
    response.send(request.body);
})

app.listen(3000, ()=>{
    console.log("서버시작")
});