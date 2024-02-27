/*
const fs = require('fs')

const text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);
*/
//사실 지금은 파일 안의 데이터가 별로 없어 크기가 작기 때문에 동기 비동기가 실감나지 않을 수 있음.

/*
const fs = require('fs')

fs.readFile('textfile.txt', 'utf8', function(error, data){
    console.log(data);
});
*/

/*
const fs = require('fs');

fs.readFile('./package.json', 'utf-8', function(err, data){
    console.log(data);
});

console.log('폴더 안의 package.json 파일을 읽도록 요청했습니다.')
'폴더 안의 package.json 파일을 읽도록 요청했습니다'가 먼저 출력됨. 
왜냐하면 비동기라서 데이터 요청해놓은 상태에서 다른 행동으로 바로 넘어갈 수 있기 때문에.
*/

