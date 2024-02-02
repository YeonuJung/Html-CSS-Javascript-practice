const emojis = [
  "😁",
  "😁",
  "🫥",
  "🫥",
  "😍",
  "😍",
  "🥶",
  "🥶",
  "🤢",
  "🤢",
  "😡",
  "😡",
  "👿",
  "👿",
  "🤖",
  "🤖",
];
let box;
let shufEmojis = emojis.sort(() => Math.random() - 0.5);
const botton = document.querySelector(".reset");
botton.addEventListener("click", () => {
  window.location.reload();
});

for (i = 0; i < emojis.length; i++) {
  box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shufEmojis[i];
  document.querySelector(".game").appendChild(box);
  box.onclick = function () {
    this.classList.add("boxOpen");

    // boxOpen:after일때 180도 돌리니깐 뒤집어지고, 뒷면이 hidden이니깐 after가 보이지 않는다.
    // 만약 안에있는 내용이 일치하지 않으면 boxOpen 클래스를 제거해버리니깐 다시 180도 돌아갔던게
    // 원상복구되면서 after의 앞면이 보이게 되면서 안에있는 item이 다시 가려진다.
    // 만약 안에있는 내용이 일치한다면 boxMatch라는 클래스를 넣어줌으로써 
    // CSS에 boxMatch:after에 180도 돌리는 걸 추가한다면?
    // 그러면 boxOpen 속성을 제거하더라도 180도가 돌아가니깐 다시 after의 뒷면이 보이면서
    // hidden 속성으로 인해 after가 보이지 않게되고 안에있는 item이 다시 보이게 된다.
    // 만약 내용이 일치했을 때 boxOpen을 제거해주지 않고 그냥 boxMatch만 쓰면?
    // boxMatch가 180도 돌아가니깐 정상적으로 작동할 것 같지만 
    // 이미 클릭 당시에 boxOpen클래스가 먼저 추가되면서 180도가 이미 돌아갔기 때문에 
    // 결과적으로 360도가 돌아가게 됨. 그러면 아무런 변화가 일어나지X
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
            //일치하는 경우
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
            // remove를 0부터 시작하면 [0]이 없어지고 [1]이 [0]이 되니깐 안됨.
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
            //일치하는 경우 + 전부 다 맞췄을 때
          if (document.querySelectorAll(".boxMatch").length == emojis.length) {
            alert("축하합니다!!");
          }
        } 
        //일치하지 않는 경우(다시 180도 돌려서 가려야 하니깐 boxOpen을 없애버리기)
        else {
            // 마찬가지로 remove를 1부터 지워줘야 0이 남아있지, 0부터 없애면 1이 0이 됨.
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 1200);
  };
}
