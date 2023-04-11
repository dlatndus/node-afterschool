const express = require('express');
let fs = require('fs'); //파일읽기 모듈
//서버생성
const app = express();
//리스너 설정
//그림파일 제공하는 uri 즉 path는 /image

app.get('/', (request, response)=>{  
    response.send('<h1>그림파일 제공하는 uri는 /image입니다</h1>');

});

app.get('/student', (request, response)=>{  
    response.send('<h1>3109 임수연 안녕~ 클레오파트라 세상에서 제일 가는 포테이토칩</h1>');

});


app.get('/image', (request, response)=>{  //* <= 모든 주소
    fs.readFile('asdf.jpg',(error, data)=>{
        if(error){
            console.log("파일읽기 에러")
        }
    response.type('image/png');
    response.send(data)
    })
    
});
//서버실행
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000');
});