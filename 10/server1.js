const express = require('express')
//서버생성
const app = express();
//리스너 설정
app.use((request, response)=>{
    response.send('<h1>Hello express</h1>');
});
//서버실행
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000');
});