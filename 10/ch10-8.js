let express = require('express');
let app = express();

app.use(express.static('public'));
//정적 파일 제공하는 폴더
app.get('*', (request, response)=>{
    response.send('정적 파일을 활용합니다.') //우와 http://localhost:3000/asdf.jpg된다
});

app.listen(3000, ()=>{
    console.log("서버시작")
});