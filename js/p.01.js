var val1 = "var 변수111111";
console.log(val1);

val1 = "var 변수 덮어쓰기";
console.log(val1);

var val1= "var 변수 재선언"
console.log(val1);

let val2 = "let 변수 선언"
console.log(val2);

val2 = "let 변수 덮어쓰기"
console.log(val2);

// let은 재선언 불가.

const val3 = "const 변수";
console.log(val3)

/* val3 = "const 변수 덮어쓰기"
console.log(val3)
const는 변수 덮어쓰기 불가 */

//단 객체, 배열, 함수의 데이터를 바꿀 수 있음.
//객체
const val4 = {
    name: "igo"
}
console.log(val4)
val4.name = "igo2"
console.log(val4)

//배열
const animal = ["dog", "cat", "bird"]
console.log(animal)
animal[0] = "lion"
console.log(animal)

/* const val3 = "const 변수 재선언"
   console.log(val3); 
const는 변수 재선언도 불가 */ 

var 사람수 = 1+3;
var 사탕개수 = 8;
console.log(사탕개수 / 사람수);

//초로 계산
var min = 60;
var hour = 3600
var day = 86400;
var year = 31536000;
console.log(day*365)

var 나이 = 28;
console.log(나이 * year )

//조건 연산 
//삼항 연산자
var x = 5;
var y = 3;
var big = x>y? x:y; // x 
console.log(big)
var small = x>y? '안녕':'잘가';
console.log(small)

//문자열 비교
var name = "Yeonwoo"
var res1 = (name == "Yeonwoo")
var res2 = (name > "Hello" )
console.log(res1)
console.log(res2)

//문자열 연결
var 인사 = "안녕하세요."
var 이름 = "정연우"
console.log(인사+ " " + 이름)
console.log(인사.concat(" 정연우입니다."))
//따옴표 안 공백도 문자로 취급

//문자열 앞 뒤 공백  -> trim() 사용 ->실제로 회원가입 페이지에서 스페이스바를 실수로 넣었을 때 사용하면 좋음.
var user = " Yeonwoo "
user = user.trim();
console.log(user) //"Yeonwoo"

//문자열 길이 -> length속성 이용하기
var 이름 = "정연우"
console.log(이름.length) //변수 뒤에
console.log("가나다라마바사아자차카타파하".length) //문자열 뒤에 

//문자열에서 한 글자만 가져오기 -> 대괄호 사용(인덱스 값), 인덱스 값은 0부터 시작
var 인사 = "안녕하세요"
console.log(인사[0]) //안
console.log(인사[1]) //녕

var 암호1 = "지도 속";
var 암호2 = "희망을";
var 암호3 = "훔쳐본다";
var 암호4 = "?!";

console.log(암호1[1] + 암호2[1] + 암호3[1] + 암호4[1]) //도망쳐!

//문자열의 특정 위치에 있는 글자 가져오기 -> charAt(인덱스 값)함수
var 인사 = "안녕하세요"
console.log(인사.charAt(0));
console.log(인사.charAt(3));

//문자열 잘라내기 -> slice(a, b) a부터 b-1까지 잘라냄
// slice(a) -> a를 시작지점으로 끝까지 잘라냄
 var 인사 = "안녕하세요"
 console.log(인사.slice(0, 2))

 //일부 문자열을 다른 문자열로 변경 -> replace()함수
 var 인사 ="안녕하세요"
 var new인사 = 인사.replace("하세요", "하시구려")
 console.log(new인사);

 //문자열 분할 -> split("구분자")함수 : 결과를 배열로 리턴해준다.
 var 인사 = "안녕하세요. 반갑습니다."
 var 분할 = 인사.split(" ")
 console.log(분할[0])
 console.log(분할[1])
 console.log(분할) // ["안녕하세요.", "반갑습니다."]로 리턴

 //대소문자 바꾸기 -> 대문자(toUpperCase()함수) 소문자(toLowerCase()함수) 
 console.log("hello there, how are you doing?".toUpperCase())
 console.log("HELLO THERE, HOW ARE YOU DOING?".toLowerCase()) 

 
 /*조건문 if(조건){
    조건 만족하면 실행할 코드
    }  */

 /*switch문 switch(조건){
    case 값: 코드1
            break; 
    }
*/
