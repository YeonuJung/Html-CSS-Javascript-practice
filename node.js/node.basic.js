// const http = require('http')
// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     response.end('<h1>Hello World..!</h1>');
// }).listen(3000,function(){
//     console.log('Server running at http://127.0.0.1:3000');
// });
/*
console.log('이름 : %s', '정정정')
console.log('생년월일 : %d월 %d일', 10, 14)
console.log('사는곳 : %s', '서울')
console.log('취미 : %s, %s, %s', '노래', '자전거', '요리')
*/

/*
var num = 0;
console.time('duration_sum')
for(i = 1; i <= 1000; i++){
    num += i 
}
console.timeEnd('duration_sum')
console.log('1부터 1000까지 더한 값 : %d', num)
*/

/*
console.log('argv 속성의 파라미터 수 : %d', process.argv.length)
process.argv.forEach(function(item, index){
    console.log(`${index} : ${item}`)
})
*/

/*
const {add, multiply} = require('./module1.js')
console.log('10 + 30 = %d', add(10, 30));
console.log('12 * 5 = %d', multiply(12, 5));
*/

/*
const {bigNum} = require('./module2.js')
console.log(`큰 수는 ${bigNum(100, 50)}입니다.`)
*/

/*
const {temAvg} = require('./module3.js')
let 온도 = [15.1, 15.4, 16.1, 17.5, 19.2]
console.log(`평균 온도는 ${temAvg(온도)}입니다.`)
*/

/*
const {bigOfRandom} = require('./module4.js')
let randoms = [];
for(i = 0; i < 10; i++){
randoms.push(Math.floor(Math.random() * 101))
console.log(randoms[i])
}
console.log(`제일 큰 수는 ${bigOfRandom(randoms)}입니다.`)
*/

/*
const crypto = require('crypto')
const shaHash = crypto.createHash('sha256')
shaHash.update('crypto_hash')

let output = shaHash.digest('hex')

console.log('crypto_hash :', output)
*/

/*
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456";
const input = "암호화할 문장";
// 암호화
const cipher = crypto.createCipheriv(algorithm, key, iv);
let cipheredOutput = cipher.update(input, "utf8", "base64");
cipheredOutput += cipher.final("base64");
// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decipheredOutput = decipher.update(cipheredOutput, "base64", "utf8");
decipheredOutput += decipher.final("utf8");
// 출력
console.log("원래 문자열 : " + input);
console.log("암호화 : " + cipheredOutput);
console.log("암호화 해제 : " + decipheredOutput)
*/

/*
const myURL = new URL("https://sub.example.com:8080/p/a/t/h?query=string#hash");
   console.log(myURL);
   console.log(myURL.hostname);
   console.log(myURL.port);
   console.log(myURL.pathname);
   console.log(myURL.search);
   console.log(myURL.hash);
   console.log(myURL.searchParams);
*/

/*
const myURL = new URL("https://example.org/?bcode=B4250257160&page=300&category=javascript&category=nodejs");
console.log(myURL.searchParams.getAll('category')); // 해당하는 키의 값 전부를 추출
console.log(myURL.searchParams.get('category')); // 해당하는 키의 첫 번째 값만 추출
console.log(myURL.searchParams.has('category')); // 해당 키가 존재하는지 불리안으로 반환
console.log(myURL.searchParams.keys('category')); // 모든 키를 iterator객체로 반환
console.log(myURL.searchParams.values('category')); // 모든 값을 iterator객체로 반환

// 이를 응용하면 get으로 id 값과 password 값을 변수에 저장하고 조건문을 사용해서 아이디 비밀번호의
// 일치여부를 판단하는 로직을 만들면? 로그인 관련 로직을 만들 수 있음. 만약 이를 프론트에서
// id, password를 보내주는 로직과 결합하면 하나의 로그인 창을 실현할 수 있음.
*/

/*
    기본내장모듈 실습
const os = require('os')
console.log('시스템의 hostname : %s', os.hostname());
console.log('시스템의 총 메모리 : %d', os.totalmem());
console.log('시스템의 사용 가능 메모리 : %d', os.freemem());
console.log('시스템의 CPU 정보 : %s');
console.log(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보');
console.log(os.networkInterfaces());

const url = new URL('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty')
console.log(url.searchParams.get('query')); 
console.log(url.searchParams);
console.log(url.searchParams.get('sm'))

const path = require('path');

let directories = ['Users', 'mike', 'docs'];
let docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);

let curPath = path.join('/Users/mike', 'notepad.exe')
console.log('파일 경로 : %s', curPath)

let filename = "C:\\Users\\mike\\notepad.exe";
let dirname = path.dirname(filename);
let basename = path.basename(filename);
let extname = path.extname(filename);
console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);

const fs = require('fs')

fs.readFile('output.txt', 'utf-8', (err, data) => {
    console.log(data)
})
const outputText = fs.readFileSync('output.txt', 'utf-8')
console.log(outputText)

const fs = require('fs')

let text = "비동기 방식으로 파일쓰기 해서 쓴 제 이름입니다. -> 정연우"
fs.writeFile('output.txt', text, 'utf-8', (err) => {
    console.log('output.txt 파일에 데이터 쓰기 완료')
} )

*/

/*
   이벤트 연결
// process 객체에 exit 이벤트 연결(exit은 노드실행 종료(함수 끝났을 때)시 자동으로 실행됨)
process.on('exit', function(){
    console.log('안녕히가세요^^');
   });
   // process 객체에 uncaughtException 이벤트 연결(예외, 즉 오류났을 때 실행)
   process.on('uncaughtException', function(error){
    console.log('예외가 발생했습니다!!');
   });
   // 2초 간격으로 3번 예외를 발생시킨다.
   let count = 0;
   function test() {
    count = count + 1;
    if(count > 3) { return; }
    // 예외를 강제로 발생시킨다.
    setTimeout(test, 2000);
   error.error.error();
   };
   setTimeout(test, 2000);
*/

/*
이벤트 연결 개수 제한(기본적으로 10개)
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });

// 이벤트 연결 개수 제한을 15개로 늘림
process.setMaxListeners(15);
// 이벤트 연결
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });
process.on('exit', function(){ });

*/

/*
process.on("uncaughtException", function (error) {
    console.log("예외가 발생했군^^ 이번에만 봐주겠다!");
   });
   // 2초 간격으로 예외를 발생시킨다.
   function test() {
    setTimeout(test, 2000);
    error.error.error();
   }
   setTimeout(test, 2000);
*/

// exit 이벤트를 연결한다

/*
이벤트 강제 발생 -> 실제 이벤트가 발생하지는 않았지만 강제로 이벤트 리스너를 실행
즉 exit 이벤트가 실제로 발생하진 않았음에도 이벤트 리스너를 강제로 실행하는 것이기 때문에
프로그램이 종료되지는 않고 이벤트 리스너만 실행되는 것임.
process.on('exit', function(){
 console.log('안녕히 계세요..!');
});
// 이벤트를 강제로 발생시킨다

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
// 프로그램 실행중
console.log('프로그램 실행중');

강제로 프로그램을 종료시키고 싶으면? exit()함수 사용
*/

/*
서버객체 생성 및 실행
// 모듈 추출
const http = require("http");
// server 객체 생성
const server = http.createServer();
// 포트 설정
const port = 3000;
// 웹 서버 실행
server.listen(port, function () {
console.log("웹 서버가 시작되었습니다. : %d", port);
});
*/

/*
서버종료
// 모듈 추출
const http = require("http");
// server 객체 생성
const server = http.createServer();
// 포트 설정
const port = 3000;
// 웹 서버 실행
server.listen(port, function () {
console.log("웹 서버가 시작되었습니다. : %d", port);
});
// 10초 후 실행
let sclose = function(){
// 서버 종료
server.close();
};
setTimeout(sclose, 10000);
*/

/*
HTML 내용 전달
// 모듈 추출
const http = require("http");
// server 객체 생성
const server = http.createServer();
// 포트 설정
const port = 3000;

server.on("request", function (req, res) {
console.log("Request On");
res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
res.write("<!DOCTYPE html>");
res.write("<html>");
res.write("<head>");
res.write("<title>응답 페이지</title>");
res.write("</head>");
res.write("<body>");
res.write("<h1>Node.js로부터의 응답 페이지</h1>");
res.write("</body>");
res.write("</html>");
res.end();
});
// 웹 서버 실행
server.listen(port, function () {
console.log("웹 서버가 시작되었습니다. : %d", port);
})
*/

/*
          HTML 페이지 제공
// 모듈 추출
const fs = require("fs");
const http = require("http");
// 서버 생성 및 실행
http.createServer(function (request, response) {
// HTML 파일을 읽기
fs.readFile("htmlpage.html", function (error, data) {
response.writeHead(200, { "Content-Type": "text/html" });
response.end(data);
});
}).listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});

이미지, 음악 등의 파일을 제공하고 싶으면 응답 헤더의 두 번째 매개변수로 Content-Type을 MIME Type으로 설정
즉 writeHead에 두 번째 매개변수로 Content-Type에 알맞는 MIME Type 설정

특정 페이지로 강제 이동시키고 싶으면?
응답 헤더의 두 번째 매개변수로 Location 속성을 사용해서 해당 페이지 주소 적기

// 모듈 추출
const http = require('http');
// 서버 생성 및 실행
http.createServer(function(request, response){
response.writeHead(302, {'Location' : 'http://www.naver.com'});
response.end();
}).listen(3000, function(){
console.log('Server Running at http://127.0.0.1:3000');
});

그렇다면 writeHead의 첫 번째 매개변수는 무엇인가? -> 상태 코드
1xx는 처리 중 2xx는 성공 3xx는 리다이렉트 4xx는 클라이언트 오류 5xx는 서버오류

// 모듈 추출
const http = require('http');
// 서버 생성 및 실행
http.createServer(function(request, response){
response.writeHead(404);
response.end();
}).listen(3000, function(){
console.log('Server Running at http://127.0.0.1:3000');
});
*/

/*
// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();
// 미들웨어 사용
app.use(function(request, response, next) {
console.log('미들웨어에서 요청을 처리함.');
 response.send(“<h1>Express 서버에서 응답한 결과입니다.</h1>”);
});
app.listen(3000, function(){
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
// 모듈 추출및 서버 생성
const express = require('express');
const app = express();
// 미들웨어 설정 1
app.use(function(request, response, next){
 console.log("첫 번째 미들웨어");
 next();
});
//미들웨어 설정 2
app.use(function(request, response, next){
 console.log("두 번째 미들웨어");
 next();
});
//미들웨어 설정 3
app.use(function(request, response, next){
 console.log("세 번째 미들웨어");
});
app.listen(3000, function(){
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
       미들웨어를 사용한 속성 추가
// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();
//미들웨어 설정
app.use(function(request, response, next){
 // 데이터 추가
 request.number = 2023;
 response.number = 2024;
 next();
});
app.use(function(request, response, next){
 // 응답
 response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');
});
// 서버 실행
app.listen(3000, function(){
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/* 파일 읽어서 응답
//모듈 추출
const express = require("express");
const fs = require("fs");
//서버 생성
const app = express();
app.use(function (request, response) {
 fs.readFile("htmlpage.html", 'utf-8', function (error, data) {
 // 응답 방법 2.
 response.send(data); 
 });
});
// 서버 실행
app.listen(3000, function () {
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/* 데이터 생성해서 응답
//모듈 추출
const express = require('express');
//서버 생성
const app = express();
app.use(function(request, response){
 // 데이터 생성
 const output = [];
 
 for(let i=0; i<3; i++){
 output.push({ count : i, name : 'name - ' + i});
 }
 // 응답
 response.send(output);
});
// 서버 실행
app.listen(3000, function(){
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
상태코드 전달하고 싶으면 send 메서드 앞에 status메서드 사용
상태코드만 전달하고 싶으면 status 메서드만 사용
//모듈 추출
const express = require('express');
//서버 생성
const app = express();
//request 이벤트 리스너 설정
app.use(function(request, response){
 // 응답
 response.status(404).send('<h1>ERROR</h1>');
});
// 서버 실행
app.listen(3000, function(){
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
          redirect메서드 -> 특정 경로로 이동시킬 수 있음
//모듈 추출
const express = require('express');
//서버 생성
const app = express();
//request 이벤트 리스너 설정
app.use(function(request, response){
 // 응답
 response.redirect("http://www.naver.com");
});
// 서버 실행
app.listen(3000, function(){
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
        요청 객체의 query 속성을 사용하여 get 방식으로 전송한 요청 파라미터 확인
        post 방식으로 전송한 요청 파라미터는 body 속성 사용
//모듈 추출
const express = require("express");
//서버 생성
const app = express();
// 미들웨어 설정
app.use(function(request, response){
 let name = request.query.name;
 let region = request.query.region;
 // 응답
response.send('<h1>' + name + '-' + region + '</h1>');
});
// 서버 실행
app.listen(3000, function(){
 console.log("Server Running at http://127.0.0.1:3000");
});
*/

/* body-parser 미들웨어 -> post 방식의 본문 데이터 추출
   static 미들웨어 -> 웹서버에서 파일 제공하는 역할 담당
   즉 서버의 특정 폴더의 파일들을 클라이언트가 특정 경로로 바로 접근할 수 있도록 해줌

//모듈 추출 및 서버 생성
const express = require("express");
const app = express();

// public 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정(static 미들웨어)
app.use(express.static(__dirname + "/public"));

// application/x-www-form-urlencoded 방식 파싱(body-parser 미들웨어)
app.use(express.urlencoded({ extended: false }));

app.use(function (request, response, next) {
let paramId = request.body.id;
let paramPw = request.body.password;
response.send("<h1>ID : " + paramId + "<br>PW : " + paramPw + "</h1>");
});
// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*       router 미들웨어
//모듈 추출 및 서버 생성
const express = require("express");
const app = express();

// public 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정(static 미들웨어)
app.use(express.static(__dirname + "/public"));

// application/x-www-form-urlencoded 방식 파싱(body-parser 미들웨어)
app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response){
    response.redirect("login.html")
});

app.post("/login.html", function (request, response){
    let paramId = request.body.id;
    let paramPw = request.body.password;

    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("<h1>로그인 페이지에서 응답한 결과</h1>");
    response.write("<hr>");
    response.write("<p>ID : " + paramId + "</p>");
    response.write("<p>PW : " + paramPw + "</p>");
    response.send();
})

// 서버 실행
app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});

*/

/*           router 미들웨어 
//모듈 추출 및 서버 생성
const express = require("express");
const app = express();

// public 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정(static 미들웨어)
app.use(express.static(__dirname + "/public"));

// application/x-www-form-urlencoded 방식 파싱(body-parser 미들웨어)
app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response){
    response.redirect("join.html")
});

app.post("/join.html", function (request, response){
    let paramName = request.body.name;
    let paramAddress = request.body.address;

    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("<h1>회원가입 페이지에서 응답한 결과</h1>");
    response.write("<hr>");
    response.write("<p>Name : " + paramName + "</p>");
    response.write("<p>Address : " + paramAddress + "</p>");
    response.send();
})

// 서버 실행
app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});

*/ 

/*
 //간단한 로그인 로직 실현해보기
const express = require("express");
const app = express();
let userId = "jjjj1234";
let userPw = 12341234;

// public 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정(static 미들웨어)
app.use(express.static(__dirname + "/public"));

// application/x-www-form-urlencoded 방식 파싱(body-parser 미들웨어)
app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response) {
  response.redirect("login.html");
});

app.post("/login.html", function (request, response) {
  let paramId = request.body.id;
  let paramPw = request.body.password;

  if (paramId == userId && paramPw == userPw) {
    response.send("<h1>로그인 : 로그인되었습니다.</h1>");
  } else {
    response.send("<h1>아이디, 비번 다시 확인하세요.</h1>");
  }

});

// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();
// 라우터 설정
app.get('/page/:id', function(request, response){
let name = request.params.id;
// 응답
response.send('<h1>' + name + ' Page</h1>');
});
// 서버 실행
app.listen(3000, function () {
console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();
// 라우터 설정
app.get('/', function(request, response){
response.send('<h1>Index Page</h1>');
});
app.all('*', function(request, response){
response.status(404).send('<h1>ERROR-Page Not Found</h1>');
});
// 서버 실행
app.listen(3000, function(){
console.log("Server Running at http://127.0.0.1:3000");
});
*/

/*
//모듈 추출 및 서버 생성
const express = require('express');
const session = require('express-session');
const app = express();

// express-session 미들웨어 설정
app.use(session({
secret : 'secret key',
resave : false,
saveUninitialized : true
}));

app.get("/", function (request, response) {
// 세션 설정 : request.session.세션이름 = 세션객체
request.session.now = new Date().toString();
// 응답
response.send(request.session);
});

// 서버 실행
app.listen(3000, function(){
console.log("Server Running at http://127.0.0.1:3000");
});
*/