
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

