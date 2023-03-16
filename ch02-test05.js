//2023.03.16
//모듈 
//더하기 함수를 모듈로 분리한 calc.js 파일을 불러들임
//exports 가 불러들인 객체

var calc = require('./calc');
console.log(`모듈 분리후 - calc.add 함수 호출 결과 ${calc.add(10, 10)}`)