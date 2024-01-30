const wordInput = document.querySelector(".wordInput");
const wordDisplay = document.querySelector(".wordDisplay");
const timeLimit = document.querySelector(".timeLimit");
const scoreUpdate = document.querySelector(".score");
const button = document.querySelector(".button");
const resetButton = document.querySelector(".resetButton");
let score = 0;
let time = 10;
let isPlaying;
let timeInterval;
let words = ["banana", "Monkey", "apple", "grape", "strawberry", "blueberry","lemon"];
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
  }
}

// 버튼 눌렀을 때 시간이 흘러가게 그리고 버튼을 누를 때마다 다시 초기세팅으로 바꿔주기
button.addEventListener("click", run);
function run() {
  randomIndex = Math.floor(Math.random() * words.length);
  wordDisplay.innerHTML = words[randomIndex];
  time = 10;
  isPlaying = true;
  timeInterval = setInterval(countDown, 1000);
  buttonChange("게임진행중...");
}

//리셋 버튼 추가 -> 세팅 초기화 및 isPlaying을 false로 해서 값을 넣어도 점수가 올라가지 X
//게임이 끝나고 버튼이 다시 돌아오게 만들려면 리셋 버튼이 필요
resetButton.addEventListener("click", reset);

function reset() {
  time = 10;
  timeLimit.innerHTML = 0;
  score = 0;
  isPlaying = false;
  scoreUpdate.innerHTML = score;
  clearInterval(timeInterval);
  buttonChange("게임시작");
  wordInput.value = "";
  wordDisplay.innerHTML = "랜덤단어";
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
