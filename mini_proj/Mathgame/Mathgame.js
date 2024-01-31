const answerInput = document.querySelector(".answerInput");
const expDisplay = document.querySelector(".expDisplay");
const timeLimit = document.querySelector(".timeLimit");
const scoreUpdate = document.querySelector(".score");
const button = document.querySelector(".button");
const resetButton = document.querySelector(".resetButton");
let score = 0;
let time = 20;
let isPlaying;
let timeInterval;
let exps = [
  "9 * 9",
  "72 / 8 * 2 - 1",
  "66 + 34 * 10",
  "5 - 4 + 2",
  "18 / 2 * 3",
  "25 + 35 - 25",
  "4 * 4 * 9",
  "72 - 12 * 5",
  "64 * 4 - 15",
  "80 + 29 - 13",
];
let randomIndex;
buttonChange("게임시작");
//score 변수를 0으로 설정해놓음으로써 스코어 따로, 스코어 업데이트 따로 할 수 있음

//값 일치 확인
answerInput.addEventListener("input", input);
function input() {
    //Input의 value는 숫자를 입력해도 type이 text여서 문자로 인식하는듯?
  if (parseInt(answerInput.value) === eval(expDisplay.innerHTML)) {
    if (!isPlaying) {
      return;
    }
    score++;
    scoreUpdate.innerHTML = score;
    answerInput.value = ""; //초기화를 시키지 않으면 계속 점수가 올라가니깐
    randomIndex = Math.floor(Math.random() * exps.length);
    expDisplay.innerHTML = exps[randomIndex];
  }}
// 버튼 눌렀을 때 시간이 흘러가게 그리고 버튼을 누를 때마다 다시 초기세팅으로 바꿔주기
button.addEventListener("click", run);
function run() {
  randomIndex = Math.floor(Math.random() * exps.length);
  expDisplay.innerHTML = exps[randomIndex];
  time = 20;
  isPlaying = true;
  timeInterval = setInterval(countDown, 1000);
  buttonChange("게임진행중...");
  
}

//리셋 버튼 추가 -> 세팅 초기화 및 isPlaying을 false로 해서 값을 넣어도 점수가 올라가지 X
//게임이 끝나고 버튼이 다시 돌아오게 만들려면 리셋 버튼이 필요
resetButton.addEventListener("click", reset);

function reset() {
  time = 20;
  timeLimit.innerHTML = 20;
  score = 0;
  isPlaying = false;
  scoreUpdate.innerHTML = score;
  clearInterval(timeInterval);
  buttonChange("게임시작");
  answerInput.value = "";
  expDisplay.innerHTML = "랜덤식 나오는 곳";
}

// 시간이 1초씩 주는 함수 그리고 time변수에 담으면서 0초가 되었을 때 초기화
function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (isPlaying == false) {
    clearInterval(timeInterval);
    buttonChange("게임종료");
  }
  timeLimit.innerHTML = time;
}

//buttonChange함수에 게임시작을 넣어서 로딩중일 때의 클래스를 제거했음.
function buttonChange(text) {
  button.innerHTML = text;
  text === "게임시작"
    ? button.classList.remove("Loading")
    : button.classList.add("Loading");
}


