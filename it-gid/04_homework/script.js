// task 1 --------------------
fetch("http://api.openweathermap.org/data/2.5/weather?id=1538634&appid=ef055dc2a3ce7e62285e867ad3dd0302")
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector(".weather__city").textContent = data.name;
        document.querySelector(".weather__temp").innerHTML = Math.round(data.main.temp - 273) + " " + "&deg" + "C";
        document.querySelector(".weather__clouds").innerHTML = data.weather[0].description;
        let img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector(".weather__clouds-img").setAttribute("src", img);
    })
    .catch(function () {
        //catch any errors
    });