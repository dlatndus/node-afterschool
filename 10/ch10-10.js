const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(express.static('public'));
app.use(morgan('combined'));

app.get('*', (request, response)=>{
    response.send('명령 프롬포트를 확인해주세요')
});

app.listen(3000, ()=>{
    console.log("서버시작")
});