const cardArray = [
  {
    name: "cat",
    img: "./Cardimg/cat.png",
  },
  {
    name: "dog",
    img: "./Cardimg/dog.png",
  },
  {
    name: "bear",
    img: "./Cardimg/bear.png",
  },
  {
    name: "fox",
    img: "./Cardimg/fox.png",
  },
  {
    name: "rabbit",
    img: "./Cardimg/rabbit.png",
  },
  {
    name: "tiger",
    img: "./Cardimg/tiger.png",
  },
];

const createBoard = () => {
    for (let i = 0; i < gameDOM.length; i++){
        for (let j = 0; j < gameDOM[i].length; j++){
            const card = document.createElement("img")
            card.setAttribute("src", "./Cardimg/questionMark.jpg");
            card.classList.add("eachImage")
            gameDOM[i][j].appendChild(card)
            //gameDOM에는 각 인덱스마다 4개의 column객체가 담겨져 있기 때문에
            //4개의 column객체 각각에 자식으로 img태그를 부여
            //gameDOM[i]만 하면 column 4개가 담긴 노드객체가 선택되니깐 
            //[J]까지 하면 4개가 담긴 노드 객체의 각각의 column선택 가능
        }
    }
}
cardArray.sort(() => 0.5 - Math.random());
// Javascript array sort 0.5 - Math.random()
console.log(cardArray);
//작업하기 편하게 미리 게임돔 변수를 만들어서 배열 안에 각 칸의 노드들을 담아놓음
const gameDOM = [];

const getGameDOM = () => {
  const rows = document.querySelectorAll(".container .row");
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
  }
};
getGameDOM();
console.log(gameDOM);
const flip = (location) => {
  console.log(location);
};
