function add(a, b, callback){
    let result = a+b;
    callback(result);
    var history = function(){
        return a + '+' + b + '=' + result;
    }
    return history;
}

var add_history = add(10, 10, function(result){
    console.log("1파라미터로 전달된 콜백함수 호출됨");
    console.log("1더하기 10 20의 결과 : %d", result);
});

    console.log("결과값으로 받은 함수 실행결과", add_history());



