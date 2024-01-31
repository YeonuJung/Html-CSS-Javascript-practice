const wordInput = document.querySelector(".wordInput");
const wordDisplay = document.querySelector(".wordDisplay");
const timeLimit = document.querySelector(".timeLimit");
const scoreUpdate = document.querySelector(".score");
const button = document.querySelector(".button");
const resetButton = document.querySelector(".resetButton");
const body = document.querySelector("body");
let score = 0;
let time = 20;
let isPlaying;
let timeInterval;
let words = [
  "banana",
  "melon",
  "apple",
  "grape",
  "strawberry",
  "blueberry",
  "lemon",
  "watermelon",
];
let randomIndex;
buttonChange("게임시작");
//score 변수를 0으로 설정해놓음으로써 스코어 따로, 스코어 업데이트 따로 할 수 있음

//단어 일치 확인
wordInput.addEventListener("input", input);
function input() {
  if (wordInput.value === wordDisplay.innerHTML) {
    if (!isPlaying) {
      return;
    }
    score++;
    scoreUpdate.innerHTML = score;
    wordInput.value = ""; //초기화를 시키지 않으면 계속 점수가 올라가니깐
    randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerHTML = words[randomIndex];
    backgroundChange()
  }}
// 버튼 눌렀을 때 시간이 흘러가게 그리고 버튼을 누를 때마다 다시 초기세팅으로 바꿔주기
button.addEventListener("click", run);
function run() {
  randomIndex = Math.floor(Math.random() * words.length);
  wordDisplay.innerHTML = words[randomIndex];
  time = 20;
  isPlaying = true;
  timeInterval = setInterval(countDown, 1000);
  buttonChange("게임진행중...");
  backgroundChange()
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
  wordInput.value = "";
  wordDisplay.innerHTML = "랜덤과일";
  body.style.backgroundImage = "none"
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

function backgroundChange() {
  switch (wordDisplay.innerHTML) {
    case "banana": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1587203976879-ef56a73ff90b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    break;
    case "watermelon": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?q=80&w=2405&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    break;
    case "melon": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    break;
    case "apple": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    break;
    case "grape": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYXBlfGVufDB8fDB8fHww)"
    break;
    case "strawberry": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1568966299181-bb7282cc84f0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    break;
    case "blueberry": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1606757389667-45c2024f9fa4?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    break;
    case "lemon": body.style.backgroundImage = "url(https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    break;
  }
}
