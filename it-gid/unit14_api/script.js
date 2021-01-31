let weather_option = document.querySelector(".weather__option");
let baseLink = `http://api.openweathermap.org/data/2.5/`;
let city = document.querySelector(".weather__city");
let method = `weather`;
let hoursNum = 1;
document.querySelector(".weather__date").textContent = getDate();

function getWeather() {
  fetch(`${baseLink}${method}?id=${city.value}&cnt=${hoursNum}&appid=ef055dc2a3ce7e62285e867ad3dd0302`)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
      // document.querySelector(".weather__city").textContent = data.name;
      document.querySelector(".weather__temp").innerHTML = Math.round(data.main.temp - 273) + " " + "&#8451";
      document.querySelector(".weather__clouds").innerHTML = data.weather[0].description;
      document.querySelector(".weather__humidity").innerHTML = data.main.humidity + " %";
      let img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".weather__clouds-img").setAttribute("src", img);
    })
    .catch(function() {
      //catch any errors
    });
}

function getDate() {
  let date = new Date();
  let day, month = "";

  switch (date.getDay()) {
    case 0: {
      day = "воскресенье";
      break;
    }
    case 1: {
      day = "понедельник";
      break;
    }
    case 2: {
      day = "вторник";
      break;
    }
    case 3: {
      day = "среда";
      break;
    }
    case 4: {
      day = "четверг";
      break;
    }
    case 5: {
      day = "пятница";
      break;
    }
    case 6: {
      day = "суббота";
      break;
    }
    case 7: {
      day = "воскресенье";
      break;
    }
  }
  switch (date.getMonth()) {
    case 0: {
      month = "января";
      break;
    }
    case 1: {
      month = "февраля";
      break;
    }
    case 2: {
      month = "марта";
      break;
    }
    case 3: {
      month = "апреля";
      break;
    }
    case 4: {
      month = "мая";
      break;
    }
    case 5: {
      month = "июня";
      break;
    }
    case 6: {
      month = "июля";
      break;
    }
    case 7: {
      month = "августа";
      break;
    }
    case 8: {
      month = "сентября";
      break;
    }
    case 9: {
      month = "октября";
      break;
    }
    case 10: {
      month = "ноября";
      break;
    }
    case 11: {
      month = "декабря";
      break;
    }
  }

  return `${date.getDate()} ${month} ${date.getFullYear()}, ${day}`;
}

function createSelect() {

  let hours = document.createElement("div");
  hours.className = "select-label";
  hours.style.display = "block";
  hours.style.marginTop = "10px";
  hours.innerHTML = `кол-во часов (от 1 до 3) 
<select class="weather__hours">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>`;
  // hours.innerHTML += `<button class="weather__btn">Обновить</button>`
  return hours;
}

function chooseMethod() {

  if (weather_option.value === "current" && document.querySelector("label")) {
    method = `weather`;
    document.querySelector(".select-label").remove();
  } else if (weather_option.value === "forecast" && !document.querySelector(".weather__hours")) {
    method = `forecast`;
    weather_option.after(createSelect());
    hoursNum = document.querySelector(".weather__hours").value;
  }
}

window.onload = getWeather;
weather_option.onchange = chooseMethod;

if ( document.querySelector(".weather__btn") ) {
  document.querySelector(".weather__btn").addEventListener('click', function(e) {
    console.log("lollo")
  });
}







document.querySelector('.weather__city').onchange = () => {
  getWeather();
}