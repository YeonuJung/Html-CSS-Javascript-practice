const API_KEY = "5a83b9eda1328501a263fa7aeb3b765b";

navigator.geolocation.getCurrentPosition(
  (position) => {
    //  position : 위치 정보를 담은 객체
    console.log(position);

    const lat = position.coords.latitude;
    const Ion = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${Ion}&appid=${API_KEY}`
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        () => {
          console.log("위치를 찾을 수 없습니다.");
        }
      );
  },
  () => {
    console.log("위치를 찾을 수 없습니다.");
  }
);
