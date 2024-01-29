var val1 = "var 변수111111";
console.log(val1);

val1 = "var 변수 덮어쓰기";
console.log(val1);

var val1 = "var 변수 재선언";
console.log(val1);

let val2 = "let 변수 선언";
console.log(val2);

val2 = "let 변수 덮어쓰기";
console.log(val2);

// let은 재선언 불가.

const val3 = "const 변수";
console.log(val3);

/* val3 = "const 변수 덮어쓰기"
console.log(val3)
const는 변수 덮어쓰기 불가 */

// 단 객체, 배열, 함수의 데이터를 바꿀 수 있음.
// 객체
/* const val4 = {
    name: "igo"
}
console.log(val4)
val4.name = "igo2"
console.log(val4) */

// 배열
const animal = ["dog", "cat", "bird"];
console.log(animal);
animal[0] = "lion";
console.log(animal);

/* const val3 = "const 변수 재선언"
   console.log(val3); 
const는 변수 재선언도 불가 */

var 사람수 = 1 + 3;
var 사탕개수 = 8;
console.log(사탕개수 / 사람수);

// 초로 계산
var min = 60;
var hour = 3600;
var day = 86400;
var year = 31536000;
console.log(day * 365);

var 나이 = 28;
console.log(나이 * year);

// 조건 연산
// 삼항 연산자
var x = 5;
var y = 3;
var big = x > y ? x : y; // x
console.log(big);
var small = x > y ? "안녕" : "잘가";
console.log(small);

// 문자열 비교
var name = "Yeonwoo";
var res1 = name == "Yeonwoo";
var res2 = name > "Hello";
console.log(res1);
console.log(res2);

// 문자열 연결
var 인사 = "안녕하세요.";
var 이름 = "정연우";
console.log(인사 + " " + 이름);
console.log(인사.concat(" 정연우입니다."));
// 따옴표 안 공백도 문자로 취급

// 문자열 앞 뒤 공백  -> trim() 사용 ->실제로 회원가입 페이지에서 스페이스바를 실수로 넣었을 때 사용하면 좋음.
var user = " Yeonwoo ";
user = user.trim();
console.log(user); //"Yeonwoo"

// 문자열 길이 -> length속성 이용하기
var 이름 = "정연우";
console.log(이름.length); //변수 뒤에
console.log("가나다라마바사아자차카타파하".length); //문자열 뒤에

// 문자열에서 한 글자만 가져오기 -> 대괄호 사용(인덱스 값), 인덱스 값은 0부터 시작
var 인사 = "안녕하세요";
console.log(인사[0]); //안
console.log(인사[1]); //녕

var 암호1 = "지도 속";
var 암호2 = "희망을";
var 암호3 = "훔쳐본다";
var 암호4 = "?!";

console.log(암호1[1] + 암호2[1] + 암호3[1] + 암호4[1]); //도망쳐!

// 문자열의 특정 위치에 있는 글자 가져오기 -> charAt(인덱스 값)함수
var 인사 = "안녕하세요";
console.log(인사.charAt(0));
console.log(인사.charAt(3));

// 문자열 잘라내기 -> slice(a, b) a부터 b-1까지 잘라냄
// slice(a) -> a를 시작지점으로 끝까지 잘라냄
var 인사 = "안녕하세요";
console.log(인사.slice(0, 2));

// 일부 문자열을 다른 문자열로 변경 -> replace()함수
var 인사 = "안녕하세요";
var new인사 = 인사.replace("하세요", "하시구려");
console.log(new인사);

// 문자열 분할 -> split("구분자")함수 : 결과를 배열로 리턴해준다.
var 인사 = "안녕하세요. 반갑습니다.";
var 분할 = 인사.split(" ");
console.log(분할[0]);
console.log(분할[1]);
console.log(분할); // ["안녕하세요.", "반갑습니다."]로 리턴

// 대소문자 바꾸기 -> 대문자(toUpperCase()함수) 소문자(toLowerCase()함수)
console.log("hello there, how are you doing?".toUpperCase());
console.log("HELLO THERE, HOW ARE YOU DOING?".toLowerCase());

/*조건문 if(조건){
    조건 만족하면 실행할 코드
    }  */

/*switch문 switch(조건){
    case 값: 코드1
            break; 
    }
*/

//반복문 (for문, while문, do while문)
/* for(초기문; 조건식; 반복 후 작업;){
   조건이 true일 때 실행시킬 코드(작업문) 
}
초기문은 최초 한번만 실행, 순서는 초기문 -> 조건식 확인 -> 작업문 -> 반복 후 작업
 */
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// 중첩 for문
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 10; j++) {
    console.log(`집에갈까 ${j}번째 고민중`);
  }
}
/*while(조건){
조건이 true일 때 실행시킬 코드(작업문)
}
반복 횟수를 알 수 없는 경우 주로 사용!
*/
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// 배열 -> 데이터 값을 하나의 목록으로 생성, []로 묶고 ,로 구분, 안에 있는 값은 원소라고 부름
// 컬렉션을 배열로 바꾸고 싶으면 Array.from(컬렉션)
var 과일Top3 = ["딸기", "망고스틴", ["사과", "오렌지", "레몬"], "수박"];
console.log(과일Top3);
console.log(과일Top3[2]);
과일Top3[0] = "포도";
console.log(과일Top3);
과일Top3[30] = "귤";
console.log(과일Top3);
console.log(과일Top3[2][0]);
console.log(과일Top3.length);
var 우유 = ["딸기", "바나나", "초코"];
for (i = 0; i < 우유.length; i++) {
  console.log(우유[i]);
}
// length 메소드 -> 개수 구할 수 있음
// for문에서 응용하면 조건에 배열.length해서 범위 조절할 수 있음
// push 메소드 -> 배열에 원소 추가할 때 .push(추가할 데이터)  --> 인덱스 맨 뒤로 들어간다.
// unshift 메소드 -> 배열에 원소 추가할 때 .unshift(추가할 데이터 ---> 인덱스 맨 앞에 들어간다.)

우유.push("커피");
console.log(우유);
우유.unshift("메론");
console.log(우유);

// pop 메소드 -> 마지막 원소를 제거
// shift 메소드 -> 첫번째 원소를 제거

우유.pop();
console.log(우유);
우유.shift();
console.log(우유);

// 배열 결합하기 -> 첫 번째 배열.concat(두 번째 배열)
// 여러 배열 결합 -> 결합하려는 배열을 차례로 괄호 안에 넣고 쉼표로 구분

var 포유류 = ["강아지", "고양이", "소"];
var 파충류 = ["비어디드래곤", "나일모니터", "카멜레온"];
var 조류 = ["앵무새", "독수리", "매"];
var 포유류파충류 = 포유류.concat(파충류);
console.log(포유류파충류);
console.log(포유류);
console.log(파충류);
var 모든동물 = 포유류.concat(파충류, 조류);
console.log(모든동물);

// 배열 다루기
// 배열 원소 인덱스 찾기 -> 배열이름.indexOf(원소) 배열에 없는 원소 값을 물어보면 -1 반환.
// includes(검사할 값) 함수로도 인덱스가 있는지 없는지 확인할 수 있음. 다만 반환값이
// True 와 false로 나온다는 차이점이 있다.
var 색상 = ["빨강", "초록", "파랑"];
console.log(색상.indexOf("파랑"));
console.log(색상.indexOf("빨강"));
// 배열에 포함된 모든 원소를 하나의 문자열로 생성 -> 배열이름.join() -> 각 원소를 콤마로 구분
var 영화이름 = ["해리포터", "아바타", "아이언맨"];
console.log(영화이름.join());
// 콤마를 구분자로 사용하고 싶지 않다면? -> .join(내가 원하는 구분자)
console.log(영화이름.join("*"));
console.log(영화이름.join(" "));
var 주소 = ["서울시", "송파구", "문정2동"];
console.log(주소);
console.log(주소.join());
console.log(주소.join(" "));
// 스택 -> 맨 처음에 추가한 원소가 맨 마지막에 제거 (LIFO 라스트 인 퍼스트 아웃)
// 스택구현 -> push 와 pop으로
// 큐 -> 데이터를 차례대로 입력하고, 입력된 순서대로 꺼냄 (FIFO 퍼스트인 퍼스트 아웃)
// 큐는 -> push 와 shift로
// 스택은 회전초밥 접시 치울 때 생각해보기, 큐는 프린트기 원리 생각해보기

// math.random() -> 0과 1사이의 숫자 하나를 무작위로 선택해서 반환
// 1미만의 숫자만 반환하기 때문에 소숫점으로 반환함.
// 정수로 반환하고 싶으면 Math.floor()사용하기 -> Math.floor()는 소숫점 다 버려버림
// 더 큰 숫자를 원하면 반환한 값에 곱셈을 추가하기
// 주의할 점은 애초에 1미만을 반환하기 때문에 만약 0, 1, 2, 3을 출력하고 싶으면 4를 곱해야 한다.
// 그래야 4미만인 소숫점이 반환될 것이고 그 수를 floor를 사용해서 정수로 바꿔주면 되기 때문이다.
var 랜덤 = Math.random();
console.log(랜덤);
console.log(랜덤 * 10);
console.log(Math.random() * 10);
var 정수인랜덤 = Math.floor(랜덤 * 10);
console.log(정수인랜덤);

// splice() 함수 -> 배열의 특정 인덱스의 원소를 제거하는 함수
// 배열이름.splice(제거를 시작할 인덱스, 제거할 갯수)

// 객체는 프로퍼티와 메소드로 구성, 프로퍼티는 객체의 고유한 속성들, 메소드는 함수(기능)
// 객체 -> { 키 : 값 }, 객체에 있는 값을 불러올 때는 객체["키"] 또는 객체.키
// 객체내의 모든 키 목록을 불러오는 메소드 -> Object.keys()
// 키에는 문자열만! but 따옴표 생략가능, 다만 키에 공백을 넣고 싶으면 따옴표를 써야함.
// 값에는 모든 타입의 자료형 사용 가능, 배열 함수도 들어갈 수 있음.
// 배열과 객체는 언제 사용하는게 좋은지?
// 배열은 여러 개체를 나열할 때, 객체는 다양한 속성이 있는 하나의 개체를 표현할 때
// 객체는 배열과 달리 순서가 없다. 따라서 키의 순서가 중요할 때는 객체 사용X
var 동물 = ["강아지", "고양이", "코뿔소"];
var 강아지 = { 이름: "~~~", 나이: 13, 주소: "~~~" };
console.log(강아지["이름"]);
console.log(강아지.이름);
console.log(Object.keys(강아지));
// 객체에 값 추가 -> 객체["키"] = 추가할 값 또는 객체.키 = 추가할 값
강아지["견종"] = "허스키";
console.log(강아지);
강아지.색깔 = "검정색";
console.log(강아지);
// 객체를 브라우저 화면에 표시하려면 JSON.stringify 사용해야함
/* 
   var 고양이 = {
   색 : "주황색",
   품종: "페르시안"
}
document.write(JSON.stringify(고양이))
*/

// 객체와 배열의 결합
// 객차/배열의 값으로 객체/배열을 사용
var 공룡 = [
  { 이름: "티라노", 연대: "백악기 후기" },
  { 이름: "스테고", 연대: "쥐라기 후기" },
  { 이름: "플라테오", 연대: "트라이아스기 " },
];
console.log(공룡[0].이름 + "<br>");
console.log(공룡[2].연대);

var 민지 = { 이름: "민지", 나이: 11, 행운의숫자: [2, 4, 6, 8] };
var 지훈 = { 이름: "지훈", 나이: 15, 행운의숫자: [3, 9, 40] };
var 서연 = { 이름: "서연", 나이: 19, 행운의숫자: [1, 2, 30] };
var 친구 = [민지, 지훈, 서연];

console.log(친구[1]);
console.log(친구[2].이름);
console.log(친구[0].행운의숫자[1]);

var 빌려준돈 = {};
빌려준돈["지훈"] = 5000;
빌려준돈["민지"] = 7000;

console.log(빌려준돈["지훈"]);
console.log(빌려준돈["진영"]); //undefined 나옴
// 지훈이가 2000원을 더 빌렸다면?
// 빌려준돈["지훈"] = 7000;
// console.log(빌려준돈["지훈"])
// 연산을 이용한다면?
빌려준돈["지훈"] = 빌려준돈["지훈"] + 2000;
console.log(빌려준돈["지훈"]);

var 영화 = {
  "니모를 찾아서": {
    개봉연도: 2003,
    상영시간: 100,
    출연진: ["엘버트 브룩스", "엘런 드제너러스", "알렉산더 굴드"],
    형식: "DVD",
  },
  "스타워즈에피소드6 제다이의 귀환": {
    개봉연도: 1983,
    상영시간: 134,
    출연진: ["마크 해밀", "해리슨 포드", "캐리 피셔"],
    형식: "DVD",
  },
};
console.log(영화["니모를 찾아서"].출연진);
console.log(영화["스타워즈에피소드6 제다이의 귀환"].상영시간);

// 우리 회사에서 서비스하는 영화의 이름만 뽑고 싶으면?
// 영화 객체에서 영화이름은 키로 저장되어 있기 때문에 키값을 뽑아야 함.
// 따라서 Object.keys()함수 사용해서 키값만 뽑기
console.log(Object.keys(영화));

// 객체의 값에 변수를 넣어도 됨. 이럴 때 키와 변수의 이름이 같은 경우 축약 가능
/* 예를 들어 키 값으로 넓이와 높이를 정해놓고 변수로 넓이와 높이를 설정해서 프롬프트로
   사용자의 입력값을 받으려고 한다면? 이럴 때 키와 변수의 이름은 같기 때문에 축약형 사용가능
*/

let width = 100;
let height = 100;

/* let area = {
       width : "width",
       height : "height"
      }  
   */
let area = {
  width,
  height,
};
console.log(area);

// 객체 안에는 함수를 넣을 수도 있음. 객체 안의 함수를 호출할 때는 ()를 넣어줘야 함.
// 속해있는 객체 안의 키에 접근하는 방법 -> this를 사용하면 간단하게 접근 가능
var dog = {
  name: "바둑이",
  age: 15,
  speak: function () {
    console.log("멍멍");
    console.log(this.name);
  },
};
dog.speak();

// 생성자 함수(틀, 껍데기 만드는) : 코드 한 줄로 유사한 객체(구조 똑같은) 여러개 만듬
// 특징 : 함수 이름의 첫 글자는 대문자로 시작하는게 관례, new 연산자를 붙여서 실행

// 생성자 함수 -> function 함수이름에 대문자로 시작, 매개변수에 변수설정
// 키값에는 this 붙여서, ":"" 대신 "=" 사용, 값에는 매개변수로 지정한 변수 지정
function Animals(name, age) {
  this.name = name;
  this.age = age;
}

// 코드 한 줄로 객체를 생성 -> new 연산자를 사용
var dog = new Animals("하늘이", 18); //dog 객체를 생성
var cat = new Animals("야옹이", 10); //cat 객체를 생성
var tiger = new Animals("어흥이", 20);
var lion = new Animals("캬앙이", 25);
console.log(lion);
var panda = new Animals("푸바오", 5);
console.log(panda);
/*
var dog = {
   name : "하늘이",
   age : 18
}
var cat = {
   name : "야옹이",
   age : 10
}
var tiger = {
   name : "어흥이",
   age : 20
}
var lion = {
   name : "캬앙이",
   age : 25
}
*/
// 함수는 매개변수 개수에 따라서 같은 이름의 함수를 여러가지 만들 수 있음
// 내장 객체 -> 자바스크립트에 내장되어 있는 객체
// Date 객체 : 시간 정보를 담는 객체, 월(month)값은 0부터 시작
var now = new Date();
console.log(now);
var now2 = Date()
console.log(now2)

// Date 객체의 메소드는 여러 가지가 있다. (getDate(), getHours()......)
var date = now.getDate();
console.log(date);
var hour = now.getHours();
console.log(hour);
// 현재 우리나라 시간 값을 가진 객체를 생성하고 싶으면 toLocaleString() 사용
console.log(now.toLocaleDateString()); // 날짜만
console.log(now.toLocaleTimeString()); // 시간만
console.log(now.toLocaleString()); //날짜, 시간 전부

// Math 객체 -> 수학 계산을 위한 객체, new Math()로 객체를 생성하지 않음
// Math.프로퍼티 또는 Math.메소드()
var sq = Math.sqrt(4); // 2
var area1 = Math.PI * 2 * 2; // 2 * 2 * 3.141592....

// 난수 발생 -> Math.random() 1보다 작은 0~1 사이의 실수를 리턴
// Math.floor(m) -> m의 소수점 이하를 제거한 정수 리턴
// 0~ 100 사이의 정수 10개를 랜덤하게 생성하려면?
for (i = 0; i < 10; i++) {
  var m = Math.random() * 100;
  var n = Math.floor(m);
  console.log(n);
}

// 함수의 구성 -> function 함수이름(arg1, arg2, ...argn){
//              ..........프로그램 코드..........
//              결과를 리턴하는 return문
//               }
// 함수특징 -> 코드 재사용이 가능하다, 코드 중복을 줄일 수 있다
function adder(a, b) {
  var sum;
  sum = a + b;
  return sum;
}
var addN = adder(2000, 1500);
console.log(addN);
// 자바스크립트에서 제공하는 전역함수 eval() 식을 계산하고 결과 리턴
// parseInt() 문자열을 숫자로 바꿔주는 함수
// isNaN() 숫자가 아님을 나타내는 함수 -> 숫자가 아니면 true 숫자이면 false

// 다이얼로그 -> 사용자 입력 및 메시지 출력 (prompt, alert, confirm)
// prompt("메시지", "디폴트 입력값(생략가능)") -> 사용자로부터 문자열을 입력 받아 리턴
// 만약 취소 버튼이나 다이얼로그를 닫은 경우 -> null이라고 판단
// 문자열 입력 없이 확인 버튼을 누른 경우 -> 빈 문자열로 인식

// confirm("메시지") -> 메시지를 출력하고 확인 똬는 취소 버튼을 가진 다이얼로그 출력
// 확인 버튼 누르면 true 리턴, 취소 버튼을 누르거나 강제로 닫으면 false 리턴

// alert("메시지") -> 메시지와 확인버튼을 가진 다이얼로그 출력, 메시지 전달하고 끝

// 화살표 함수 -> 함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법
// let 함수이름 = (arg1, arg2....) => {
//  프로그램 코드
//  return 문
// }
let adder2 = (a, b) => {
  let sum = a + b;
  return sum;
};
console.log(adder2(1, 3));
// 이 화살표 함수를 원래 함수 표현식으로 나타내면?
function adder3(a, b) {
  var sum = a + b;
  return sum;
}
console.log(adder3(1, 3));
// 매개변수가 없는 경우 소괄호 생략 불가
// 매개변수가 한 개인 경우 소괄호도 생략 가능, 코드가 한 줄인 경우 중괄호 생략 가능
// let hi = () => {
//   console.log("안녕하세요")
// }
let hi = () => console.log("안녕하세요");

// 고차함수 -> 인자로 함수를 받거나 함수를 반환하는 함수
// 함수 안에서 다른 함수를 호출할 수 있는 함수
// 매개변수에 입력값으로 들어가는 함수를 "콜백함수"라고 한다.
// 콜백함수는 인자로 전달되는 시점에 바로 함수를 호출하는 것이 아니라
// 고차함수 내부에서 필요할 때 호출되는 함수
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

function calculator(a, b, calc) {
  let result = calc(a, b);
  console.log(result);
  return result;
}

calculator(1, 1, add);
calculator(1, 2, sub);

//setTimeout -> 함수, 시간  -> 함수를 내가 적은 시간을 기준으로 실행함.
setTimeout(() => {
  console.log("5초 후에 실행됩니다.");
}, 5000);

// forEach() -> 콜백 함수를 배열의 각 요소에 대해 한 번씩 실행
// forEach()의 콜백함수는 매개변수를 3개를 가질 수 있음
// arr.forEach(function(currentValue, index, array){실행하려는 코드})
// currentValue는 현재 처리되고 있는 요소(필수), index는 현재 처리되고 있는 요소의 인덱스(옵션)
// array는 forEach()함수를 호출한 배열(옵션)

// forEach()를 이용한 배열 순회
const numbers = [10, 20, 30, 40, 50];
numbers.forEach(function (number) {
  console.log(number);
});

numbers.forEach((number) => console.log(number));

numbers.forEach((number, index) =>
  console.log("Index : " + index + " Value " + number)
);

numbers.forEach((number, index, array) => console.log(array));

// find()함수 -> 조건을 만족하는 배열의 요소를 찾아서 반환해줌, 만족하는 거 찾는 순간 종료
const fruits = ["apple", "banana", "melon", "orange", "melon"];
const favorite2 = fruits.find((name) => name === "melon");
console.log(favorite2);

// findIndex() -> 조건을 만족하는 인덱스를 반환, 만족하는 거 찾는 순간 종료
index2 = fruits.findIndex((name) => name === "melon");
console.log(index2);

// some() -> 배열의 아이템들이 조건을 부분적으로 만족하는지 확인, true값 반환
const some1 = fruits.some(function (name) {
  return name === "melon";
});
console.log(some1);

//every() 배열의 아이템들이 조건을 전부 만족하는지 확인

//filter() -> 조건에 맞는 모든 아이템들을 새로운 배열로 생성 -> 조건을 끝까지 다 봄
// find랑 다르게 조건을 앞에서 만족한다고 해도 종료하지 않고 뒤에까지 다 살펴봄
const filter1 = fruits.filter(function (name) {
  return name === "melon";
});
console.log(filter1);

//map() -> 배열 내 모든 아이템에 콜백함수를 적용한 결과를 모아 새로운 배열을 반환
// 현재 처리되고 있는 요소 뿐만 아니라 인덱스도 출력가능
// forEach()에서 array만 제외하고 생각하면 됨.
const array6 = [10, 20, 30, 40, 50];
const map1 = array6.map(function (number) {
  return number * 3;
});
console.log(map1);

// 스프레드 연산자 -> ...(변수이름)
// 점 세개를 찍어서 (배열, 객체, 함수의 매개변수)안에 담긴 여러 원소를 복사하는 기능을 가짐
// 일일히 적는 무의미한 반복을 대신해주는 것이 스프레드 연산자
function rest(num1, num2, ...nums) {
  console.log(nums);
}
rest(10, 20, 30, 40, 50); // 실행결과 [30, 40, 50]
// 즉 num1, num2에 10, 20이 차례로 먼저 인자로 전달되고 nums에 나머지 인자가 모두 들어가는 것임.
// 이렇게 함수자리의 매개변수에 스프레드 연산자를 쓰고 싶으면 마지막에 적어주어야 함.
// 마지막 자리에 들어간 스프레드 연산자를 레스트 파라미터라고 부름

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const newArr = num1.concat(num2);

console.log(newArr); //[1, 2, 3, 4, 5, 6]
// 이걸 스프레드 연산자로 만든다면?
const newArr2 = [...num1, ...num2];
console.log(newArr2);

// 구조 분해 할당 -> 배열이나 객체의 속성을 해체해서 그 값을 개별 변수에 담는 것
// [변수이름] = [저장하고 싶은 값]
let a, b, rest2;
[a, b] = [10, 20, 30];
console.log(a); //10
console.log(b); //20
[a, b, ...rest2] = [10, 20, 30, 40, 50];
console.log(rest2);

const foo = ["one", "two", "three"];
const [red, yellow, green] = foo; //red yellow green 각각을 변수로 foo값 저장
// 이렇게 하면 red yellow green 각각을 먼저 변수로 만들어 놓고 할 필요 없이
// 선언과 동시에 값을 할당할 수 있음
console.log(red);
console.log(yellow);
console.log(green);

// Set 객체 -> 중복되지 않은 값들의 집합 (집합의 특성을 가짐)
// 중복X, 순서도 없어서 인덱스로 값을 찾을 수도 X (배열과의 차이)

const set1 = new Set(); // Set객체 생성
console.log(set1); // Set(0) {}  -> Set 객체의 특징은 () 안에 데이터 개수를 표현해줌
// Set 생성자 함수에 인자로 들어간 값이 Set객체 {} 안에 데이터로 저장됨
// 인자에는 iterable객체만 들어갈 수 있음(배열, 문자열)

const set2 = new Set([1, 2, 3, 4, 5]); // Set객체 생성
console.log(set2); // Set(5) {1, 2, 3, 4, 5}

const set3 = new Set("hello"); // Set객체 생성
console.log(set3); // Set(4) {"h", "e", "l", "o"}
// Set 객체는 중복을 허용 X 따라서 l이 하나만 들어가서 개수가 4개가 됨.
// 또한 문자열을 넣으면 알파벳 단위로 끊어서 저장함

// Set 객체에 적용할 수 있는 함수 -> new Set() -> Set객체 생성, size(사이즈 확인)
// add(데이터 추가), forEach(데이터 순회), delete(삭제), clear(전부 삭제), has(데이터 존재 여부)
const set = new Set([10, 20, 30]); // Set객체 생성
console.log(set.size); //3
console.log(set.has(10)); // true
set.add(40);
console.log(set); // {10, 20, 30, 40}
set.delete(20);
console.log(set); //{10, 30}
set.clear();
console.log(set);

// Map 객체 -> 키와 값의 쌍으로 이루어진 객체, Map 객체는 key에 모든 자료형 가능
const map = new Map(); // Map객체 생성
console.log(map) // Map(0) {}  Set객체와 마찬가지로 갯수와 값을 보여줌
map.set("name", "soo");
map.set(1, "number"); 
map.set(true, "trueValue");
console.log(map); // 즉 객체와는 달리 map 객체의 키에는 모든 자료형이 가능
// 만약 일반적인 객체였다면 키로는 문자열만 가능했겠지만 map 객체는 불리언, 숫자도 가능
// Map 객체에 적용할 수 있는 함수 new Map() -> Map객체 생성 get(키) -> 키 값 출력
// delete(삭제), set(키, 값) 키와 값 설정, size 사이즈 확인