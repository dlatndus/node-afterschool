let express = require('express');
const request = require('request')

let app = express();

app.get('*', (req, res)=>{
    res.redirect('https://www.naver.com'); //무조건 저 링크로 보내버림
});

app.listen(3000, ()=>{
    console.log('server 시작')
})
