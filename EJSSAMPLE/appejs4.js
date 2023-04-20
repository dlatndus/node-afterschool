/*<%code%> js 코드를 입력
    <%=value%> 데이터를 출력 */

let express = require('express');
let fs = require('fs');
let ejs = require('ejs');
let app = express();

//express 모듈
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//ejs모듈 추가
app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', (req, res)=>{
    console.log('/get start ejs test...');
    res.render('ejsex04',{
        dataArr : [
           {name : '와눙', age : 20},
           {name : '싱꾸', age : 20},
           {name : '카쟈', age : 20},
           {name : '랑쟈', age : 20},
        ]
    })
});


app.listen(3000, ()=>{
    console.log("server starting 3000");
})














