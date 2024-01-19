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
/* const val4 = {
    name: "igo"
}
console.log(val4)
val4.name = "igo2"
console.log(val4) */

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

//반복문 (for문, while문, do while문)
/* for(초기문; 조건식; 반복 후 작업;){
   조건이 true일 때 실행시킬 코드(작업문) 
}
초기문은 최초 한번만 실행, 순서는 초기문 -> 조건식 확인 -> 작업문 -> 반복 후 작업
 */
for(var i = 0; i < 10; i++){
   console.log(i);
}
//중첩 for문 
for(var i = 0; i < 5; i++){
   for(var j = 0; j<10; j++){
      console.log(`집에갈까 ${j}번째 고민중`);
   }
}
/*while(조건){
조건이 true일 때 실행시킬 코드(작업문)
}
반복 횟수를 알 수 없는 경우 주로 사용!
*/
var i = 0;
while(i < 10){
   console.log(i)
   i++
}

//배열 -> 데이터 값을 하나의 목록으로 생성, []로 묶고 ,로 구분, 안에 있는 값은 원소라고 부름
var 과일Top3 = ["딸기", "망고스틴",["사과", "오렌지", "레몬"], "수박"]
console.log(과일Top3)
console.log(과일Top3[2])
과일Top3[0] = "포도"
console.log(과일Top3)
과일Top3[30] = "귤"
console.log(과일Top3)
console.log(과일Top3[2][0])
console.log(과일Top3.length)
var 우유 = ["딸기", "바나나", "초코"]
for(i = 0; i < 우유.length; i++){
   console.log(우유[i])
}
// length 메소드 -> 개수 구할 수 있음
// for문에서 응용하면 조건에 배열.length해서 범위 조절할 수 있음
// push 메소드 -> 배열에 원소 추가할 때 .push(추가할 데이터)  --> 인덱스 맨 뒤로 들어간다.
// unshift 메소드 -> 배열에 원소 추가할 때 .unshift(추가할 데이터 ---> 인덱스 맨 앞에 들어간다.)

우유.push("커피")
console.log(우유)
우유.unshift("메론")
console.log(우유)

//pop 메소드 -> 마지막 원소를 제거 
//shift 메소드 -> 첫번째 원소를 제거

우유.pop()
console.log(우유);
우유.shift();
console.log(우유);

//배열 결합하기 -> 첫 번째 배열.concat(두 번째 배열)
//여러 배열 결합 -> 결합하려는 배열을 차례로 괄호 안에 넣고 쉼표로 구분

var 포유류 = ["강아지", "고양이", "소"]
var 파충류 = ["비어디드래곤", "나일모니터", "카멜레온"]
var 조류 = ["앵무새", "독수리", "매"]
var 포유류파충류 = 포유류.concat(파충류)
console.log(포유류파충류)
console.log(포유류)
console.log(파충류)
var 모든동물 = 포유류.concat(파충류, 조류)
console.log(모든동물)

//배열 다루기 
//배열 원소 인덱스 찾기 -> 배열이름.indexOf(원소) 배열에 없는 원소 값을 물어보면 -1 반환.
// includes(검사할 값) 함수로도 인덱스가 있는지 없는지 확인할 수 있음. 다만 반환값이 
// True 와 false로 나온다는 차이점이 있다.
var 색상 = ["빨강", "초록", "파랑"]
console.log(색상.indexOf("파랑"))
console.log(색상.indexOf("빨강"))
//배열에 포함된 모든 원소를 하나의 문자열로 생성 -> 배열이름.join() -> 각 원소를 콤마로 구분
var 영화이름 = ["해리포터", "아바타", "아이언맨"]
console.log(영화이름.join())
//콤마를 구분자로 사용하고 싶지 않다면? -> .join(내가 원하는 구분자)
console.log(영화이름.join("*"))
console.log(영화이름.join(" "))
var 주소 = ["서울시","송파구","문정2동"]
console.log(주소)
console.log(주소.join())
console.log(주소.join(" "))
//스택 -> 맨 처음에 추가한 원소가 맨 마지막에 제거 (LIFO 라스트 인 퍼스트 아웃)
//스택구현 -> push 와 pop으로 
//큐 -> 데이터를 차례대로 입력하고, 입력된 순서대로 꺼냄 (FIFO 퍼스트인 퍼스트 아웃)
//큐는 -> push 와 shift로
//스택은 회전초밥 접시 치울 때 생각해보기, 큐는 프린트기 원리 생각해보기

//math.random() -> 0과 1사이의 숫자 하나를 무작위로 선택해서 반환
// 1미만의 숫자만 반환하기 때문에 소숫점으로 반환함.
// 정수로 반환하고 싶으면 Math.floor()사용하기 -> Math.floor()는 소숫점 다 버려버림
// 더 큰 숫자를 원하면 반환한 값에 곱셈을 추가하기
// 주의할 점은 애초에 1미만을 반환하기 때문에 만약 0, 1, 2, 3을 출력하고 싶으면 4를 곱해야 한다.
// 그래야 4미만인 소숫점이 반환될 것이고 그 수를 floor를 사용해서 정수로 바꿔주면 되기 때문이다.
var 랜덤 = Math.random()
console.log(랜덤)
console.log(랜덤 * 10)
console.log(Math.random() * 10)
var 정수인랜덤 = Math.floor(랜덤 * 10)
console.log(정수인랜덤)

//splice() 함수 -> 배열의 특정 인덱스의 원소를 제거하는 함수 
// 배열이름.splice(제거를 시작할 인덱스, 제거할 갯수)

//객체는 프로퍼티와 메소드로 구성, 프로퍼티는 객체의 고유한 속성들, 메소드는 함수(기능)
//객체 -> { 키 : 값 }, 객체에 있는 값을 불러올 때는 객체["키"] 또는 객체.키
//객체내의 모든 키 목록을 불러오는 메소드 -> Object.keys()
// 키에는 문자열만! but 따옴표 생략가능, 다만 키에 공백을 넣고 싶으면 따옴표를 써야함.
// 값에는 모든 타입의 자료형 사용 가능, 배열 함수도 들어갈 수 있음.
 //배열과 객체는 언제 사용하는게 좋은지? 
// 배열은 여러 개체를 나열할 때, 객체는 다양한 속성이 있는 하나의 개체를 표현할 때
// 객체는 배열과 달리 순서가 없다. 따라서 키의 순서가 중요할 때는 객체 사용X
var 동물 = ["강아지", "고양이", "코뿔소"];
var 강아지 = {이름 : "~~~",
나이 : 13,
주소 : "~~~",
};
console.log(강아지["이름"])
console.log(강아지.이름)
console.log(Object.keys(강아지))
// 객체에 값 추가 -> 객체["키"] = 추가할 값 또는 객체.키 = 추가할 값
강아지["견종"] = "허스키"
console.log(강아지)
강아지.색깔 = "검정색"
console.log(강아지)
//객체를 브라우저 화면에 표시하려면 JSON.stringify 사용해야함
/* 
   var 고양이 = {
   색 : "주황색",
   품종: "페르시안"
}
document.write(JSON.stringify(고양이))
*/