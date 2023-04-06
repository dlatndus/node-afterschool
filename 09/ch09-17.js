const fs = require('fs');

fs.readFile('./09/input.txt', (error, data)=>{
    if(error){
        console.log("error발생");
        console.log(error);
    }
    else{
        console.log(data);
        console.log(data.toString());
    }
});