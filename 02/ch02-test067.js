//2023.03.16
//모듈 
//

var path = require("path");

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log(`문서 디렉터리 ${docsDirectory}`);

var curPath = path.join("./Users/mike", "notepad.exe");
console.log(`파일 패스 : ${curPath}`);