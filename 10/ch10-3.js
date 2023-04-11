const express = require('express')
//서버생성
const app = express();
//리스너 설정
app.get('*', (request, response)=>{  //* <= 모든 주소
    response.status(404);
    response.set('methodA', 'ABCDE');
    response.send('내 마음대로 본문을 입력합니다');
});
//서버실행
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000');
});