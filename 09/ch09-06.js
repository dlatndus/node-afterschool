const os = require('os');

const url = require('url');

console.log(os.hostname());
console.log(os.type());
console.log(os.arch());

//url
let urlObj = url.parse("https://www.naver.com")
console.log(urlObj);