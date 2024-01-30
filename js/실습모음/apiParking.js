fetch(
  "http://openapi.seoul.go.kr:8088/676a69704c67736838324465796b6d/json/GetParkingInfo/1/5/송파구"
)
  .then((response) => response.json())
  .then((data) => {
    let rows = data["GetParkingInfo"]["row"];
    console.log(rows);
  })
  .catch((error) => console.log(error));
