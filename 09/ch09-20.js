const request = require('request');

let url = "https://www.naver.com/";
request(url, (err, respose, body)=>{
    if(err){
        console.log("request errer");
        console.log(err)
    }
    else{
        console.log(body);
    }
    
})