

function showTable() {
  fetch("http://localhost:4000/books")
    .then((response) => response.json())
    .then((data) => Tablemaker(data))
    .catch((error) => console.log(error));
}
let bookTableBody = document.querySelector(".bookTableBody");
function Tablemaker(data) {
  data.forEach((book) => {

    let tr = `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <th></th>
            <td>${book.publisher}</td>
            <td>${book.price}</td>
        </tr>`;

    bookTableBody.innerHTML += tr;
  });
}

const form = document.getElementById("save")
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

const formData = new FormData(form);

const bookInfo = new URLSearchParams(formData);

form.addEventListener("submit", (e) => {
    // 생략
    // 서버에 데이터 전송
    fetch("http://localhost:4000/books", {
     method: "POST",
     body: bookInfo,
     })
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.log(error));
    })