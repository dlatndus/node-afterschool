var http = require('http');
var server = http.createServer();

var port = 3000;

server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다. : %d', port)
})

server.on('connect', function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다' + addr.address + addr.port);
});

server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다');
    
    const template = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>응답페이지</title>
        </head>
        <body>
            <h1>http 이용 node js 응답페이지 </h1>
        </body>
        </html>`;
        res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
        res.end(template);
    console.dir(req);
});