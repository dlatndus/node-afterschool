function add(a, b, callback){
    let result = a+b;
    callback(result);
}

add(10, 20, function(result){
    console.log("1파라미터로 전달된 콜백함수 호출됨");
    console.log("1더하기 10 20의 결과 : %d", result);
})

const add2 = (a, b, callback) => {
    let result = a+b;
    callback(result)
}

add2(10, 20, function(result){
    console.log("2파라미터로 전달된 콜백함수 호출됨");
    console.log("2더하기 10 20의 결과 : %d", result);
})


