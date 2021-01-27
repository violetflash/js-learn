let weather_option = document.querySelector(".weather__option");
let method = `weather`;


let days = document.createElement("label");
days.style.display = "block";
days.style.marginTop = "10px";
days.innerHTML = `кол-во дней (от 1 до 16) 
<select class="weather__days">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>`;


weather_option.onchange = () => {
    if (weather_option.value === "current") {
        method = `weather`;
        if ( document.querySelector("label") ) {
            document.querySelector("label").remove();
        }
    } else if (weather_option.value === "forecast" && !document.querySelector(".weather__days")) {
        method = `forecast`;
        weather_option.after(days);
    }
}

let daysNum = 1;

if ( document.querySelector(".weather__days") ) {
    let daysInput = document.querySelector(".weather__days");

    daysInput.onchange = () => {
        daysNum = daysInput.value;
        console.log(daysNum);
    }
}


let city = document.querySelector(".weather__city");
let baselink = `http://api.openweathermap.org/data/2.5/`;

document.querySelector('.weather__city').onchange = () => {
    fetch(`${baselink}${method}?id=${city.value}&cnt=${daysNum}&appid=ef055dc2a3ce7e62285e867ad3dd0302`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data);
            // document.querySelector(".weather__city").textContent = data.name;
            document.querySelector(".weather__temp").innerHTML = Math.round(data.main.temp - 273) + " " + "&#8451";
            document.querySelector(".weather__clouds").innerHTML = data.weather[0].description;
            document.querySelector(".weather__humidity").innerHTML = data.main.humidity + " %";
            let img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.querySelector(".weather__clouds-img").setAttribute("src", img);
        })
        .catch(function () {
            //catch any errors
        });
}