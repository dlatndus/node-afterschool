let express = require('express');
let app = express();

app.get("*", (req, res)=>{
    console.log(req.query);
    res.send(req.query);
});

app.listen(3000,()=>{
    console.log("서버시작")
})