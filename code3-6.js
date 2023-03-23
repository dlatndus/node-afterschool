let date = new Date();
let hours = date.getHours();

if(hours<11){
    console.log("아침먹을 시간입니다")
}
else{
    if(hours < 15){
        console.log("점심먹을 시간입니다")
    }
    else{
        console.log("저녁먹울 시간입니다")
    }
}