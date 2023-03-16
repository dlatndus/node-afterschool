//2023.03.16
//모듈 
//더하기 함수를 모듈로 분리한 calc.js 파일을 불러들임
//exports 가 불러들인 객체

//exports 사용
var calc = require('./calc');
console.log(`모듈 분리후 - calc.add 함수 호출 결과 ${calc.add(10, 10)}`)

//module.exports 사용
var calc2 = require('./calc2');
console.log(`모듈 분리후 - calc.add2 함수 호출 결과 ${calc2.add(10, 10)}`)
