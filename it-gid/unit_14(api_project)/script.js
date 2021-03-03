let weather_option = document.querySelector(".weather__option");
let dateField = document.querySelector(".date");
let weatherValues = document.querySelectorAll('.value');
let city = document.querySelector(".weather__city");
let method = `weather`;
let forecast = false; //якорь для смены доступа к объекту погодных данных
let hoursNum = 1;

document.querySelector(".date").innerHTML = getDate();
window.onload = getWeather;

function getDate() {
  let date = new Date();
  let day, month = "";
  let hours = date.getHours();
  if ( hours < 10 ) {
    hours = "0" + hours;
  }
  let minutes = date.getMinutes();
  if ( minutes < 10 ) {
    minutes = "0" + minutes;
  }

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

  return `${date.getDate()} ${month} ${date.getFullYear()}, ${day}<br>${hours}:${minutes}`;
}

function utcToLocale(epoch) {
  return new Date(epoch * 1000).toLocaleString();
}

function getWeather() {
  fetch(`http://api.openweathermap.org/data/2.5/${method}?id=${city.value}&cnt=${hoursNum}&appid=ef055dc2a3ce7e62285e867ad3dd0302`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

      //текущая погода
      document.querySelector(".weather__temp").innerHTML = (forecast)
        ? `на ${utcToLocale(data.list[0].dt).slice(11,-3)} &nbsp &nbsp ${Math.round(data.list[0].main.temp - 273)} &#8451`
        : `${Math.round(data.main.temp - 273)} &#8451`;
      document.querySelector(".weather__humidity").innerHTML = (forecast)
        ? `на ${utcToLocale(data.list[0].dt).slice(11,-3)} &nbsp &nbsp ${data.list[0].main.humidity} %`
        : `${data.main.humidity} %`;
      document.querySelector(".weather__wind").innerHTML = (forecast)
        ? `на ${utcToLocale(data.list[0].dt).slice(11,-3)} &nbsp &nbsp ${Math.round(data.list[0].wind.speed)} м/с`
        : `${Math.round(data.wind.speed)} м/с`;
      let img = (forecast)
        ? `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
        : `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".weather__clouds-img").innerHTML = ( forecast )
        ? `на ${utcToLocale(data.list[0].dt).slice(11,-3)} <img src=${img} alt="cloudy image"> <div>${data.list[0].weather[0].description}</div>`
        : `<img src=${img} alt="cloudy image"> <div>${data.weather[0].description}</div>`;

      //прогноз
      for (let i = 1; i <= hoursNum; i++) {
        let time = utcToLocale(data.list[i].dt).slice(11,-3);

        if ( document.querySelector(`.temp_${i}`) ) {
          document.querySelector(`.temp_${i}`).innerHTML = `на ${time} &nbsp &nbsp ${Math.round(data.list[i].main.temp - 273)} &#8451`;
          document.querySelector(`.humidity_${i}`).innerHTML = `на ${time} &nbsp &nbsp ${data.list[i].main.humidity} %`;
          document.querySelector(`.wind_${i}`).innerHTML = `на ${time} &nbsp &nbsp ${Math.round(data.list[i].wind.speed)} м/с`;
          let img = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
          document.querySelector(`.clouds-img_${i}`).innerHTML = `на ${time} <img src=${img} alt="cloudy image"> <div>${data.list[i].weather[0].description}</div>`;
        }

      }
    })
    .catch(function () {
      //catch any errors
    });
}

function createSelect() {
  let hours = document.createElement("div");
  hours.className = "select-label";
  hours.innerHTML = `фильтр 
<select class="weather__hours">
  <option value="1">+3 часа</option> 
  <option value="2">+6 часов</option>  
  <option value="3">+9 часов</option>
</select>`;

  return hours;
}

function createForecasts(select) {
  for (let i = 0; i < weatherValues.length; i++) {
    for (let j = 0; j < select.value - 1; j++) {  //
      let newValue = document.createElement('div');
      //На основе класса каждого параметра создается элем-т с отдельным классом для вывода прогноза
      newValue.className = `${weatherValues[i].className.slice(9, -6)}`;
      //общий класс для удаления элементов
      newValue.className += `_${j + 1} new-value`;

      // новый блок с данными добавляется в родителя последним
      weatherValues[i].parentElement.append(newValue);
    }
  }
}

function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

weather_option.addEventListener('change', function (e) {
  dateField.innerHTML = getDate();

  if (weather_option.value === "current" && document.querySelector('.select-label')) {
    removeElementsByClass("new-value"); //  удаление всех прогнозных блоков
    document.querySelector('.select-label').remove(); //  удаление селекта (фильтра прогноза)
    method = `weather`;
    forecast = false;
  } else if (weather_option.value === "forecast") {
    method = `forecast`;
    forecast = true;
    weather_option.after(createSelect());

    let hoursSelect = document.querySelector('.weather__hours');
    createForecasts(hoursSelect);
    hoursSelect.addEventListener('change', function (e) {
      dateField.innerHTML = getDate();
      removeElementsByClass("new-value");
      createForecasts(hoursSelect);
      hoursNum = hoursSelect.value;
      getWeather();
    });
  }
  getWeather();
});

city.addEventListener('change', function (e) {
  dateField.innerHTML = getDate();
  getWeather();
});

//  TODO сделать автоматич google перевод поля details?

