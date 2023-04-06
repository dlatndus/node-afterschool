const fs = require('fs');
const async = require('async');

// fs.readFile('textinput.txt', (err, data)=>{
//     console.log(data);
//     console.log(data.toString());
// });

async.parallel([
    (callback) => {fs.readFile('a.txt', callback);},
    (callback) => {fs.readFile('b.txt', callback);},
    (callback) => {fs.readFile('c.txt', callback);}
],(err, results)=>{
    if(err){
        console.log("error 발생");
        console.log(err);
    }
    else{
        console.log(results.toString());
    }
    
});