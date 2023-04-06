const fs = require('fs');

fs.writeFile('output.txt', '안녕하세요~ 임수연입니다', (err)=>{
    console.log("파일쓰기 완료");
});