
function calllTenTimes(callback){
    for(let i =0; i<10; i++){
        callback();
    }
}


calllTenTimes(function(){
    console.log("함수호출")
})