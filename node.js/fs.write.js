/*
const fs = require('fs')

let data = 'Hello World!';

fs.writeFile('textfilewrite.txt', data, 'utf-8', function(err){
    console.log('write file async complete')
})
//비동기 방식 파일 생성 및 쓰기

fs.writeFileSync('textfilewritesync.txt', data, 'utf-8');
console.log('write file sync complete')
//동기 방식 파일 생성 및 쓰기
*/


/*
   동기방식 예외처리
const fs = require('fs');

// 파일 읽기 예외처리
try{
const data = fs.readFileSync('textfile.txt', 'utf8');
console.log(data);
} catch(e){
console.log(e);
}
// 파일 쓰기 예외처리
try{
fs.writeFileSync('textfile.txt', 'Hello World..!', 'utf8');
console.log('FILE WRITE COMPLETE');
} catch(e){
console.log(e);
}
*/

/*
  비동기 방식 예외처리
const fs = require('fs');
// 파일 읽기
fs.readFile('textfile.txt', 'utf8', function(error, data){
if(error){
console.log(error);
} else{
console.log(data);
}
});
// 파일 쓰기
fs.writeFile('textfile.txt', 'Hello World..!', 'utf8', function(error){
if(error){
console.log(error);
} else{
console.log('FILE WRITE COMPLETE');
}
});
*/