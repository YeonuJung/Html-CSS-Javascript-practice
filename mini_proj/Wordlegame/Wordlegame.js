const answer = [
  "worker",
  "report",
  "social",
  "camera",
  "market",
  "design",
  "artist",
  "window",
  "future",
  "travel",
  "ground",
  "charge",
];
//div설정을 하지 않으면 인라인블럭이라서 옆으로 넘어감 바로 아래로 배치하고 싶으면 div로 블록처리 해야함.
const inputTemplate = `<div class = div>
<input type="text" class="input" />
<input type="text" class="input" />
<input type="text" class="input" />
<input type="text" class="input" />
<input type="text" class="input" />
<input type="text" class="input" />
</div>`;

const button = document.querySelector(".button");
button.addEventListener("click", correctAnswer);
const body = document.querySelector("body");
let input = document.querySelectorAll(".input");
let randomIndex = Math.floor(Math.random() * answer.length);

function removeClass() {
  input[i].classList.remove("input");
}
function removeDiv(){
    let div = document.querySelectorAll(".div")
    for(item of div){
        item.remove()
    }
}
function reset() {
    removeDiv()
    for (i = 0; i < answer[randomIndex].length; i++){
    input = document.querySelectorAll("input")
    input[i].classList.add("input")
    input[i].value = ""
    input[i].style.backgroundColor = "white"
    }
    button.addEventListener("click", correctAnswer)
    
}


function correctAnswer() {
  input = document.querySelectorAll(".input");
  for (i = 0; i < answer[randomIndex].length; i++) {
    if (answer[randomIndex][i] === input[i].value) {
      input[i].style.backgroundColor = "green";
    } else if (answer[randomIndex].includes(input[i].value)) {
      input[i].style.backgroundColor = "yellow";
    } else {
      input[i].style.backgroundColor = "red";
    }
    removeClass();
  }
  if (
    input[0].style.backgroundColor === "green" &&
    input[1].style.backgroundColor === "green" &&
    input[2].style.backgroundColor === "green" &&
    input[3].style.backgroundColor === "green" &&
    input[4].style.backgroundColor === "green" &&
    input[5].style.backgroundColor === "green"
  ) {
    alert("정답입니다! 게임을 종료합니다.");
    reset()
  }
  //height가 450이상이면 더이상 추가되지 않게 설정해보기.
else if(body.offsetHeight > 450){
    alert("기회를 모두 소진하셨습니다.");
    reset()
}
else{
     body.insertAdjacentHTML("beforeend", inputTemplate)
}
}

