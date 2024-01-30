var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

const API_KEY = "676a69704c67736838324465796b6d";

fetch(
    `http://openapi.seoul.go.kr:8088/${API_KEY}/json/GetParkingInfo/1/100/`
  )
    .then((response) => response.json())
    .then((data) => {
      let rows = data["GetParkingInfo"]["row"];
      console.log(rows);
    })
    .catch((error) => console.log(error));