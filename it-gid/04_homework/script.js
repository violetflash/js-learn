let weather_option = document.querySelector(".weather__option");
let weatherBlocks = document.querySelectorAll('.weather__block');
let weatherValues = document.querySelectorAll('.value');
let baseLink = `http://api.openweathermap.org/data/2.5/`;
let city = document.querySelector(".weather__city");
let method = `weather`;
let forecast = false; //якорь
let hoursNum = 1;

document.querySelector(".date").textContent = getDate();
window.onload = getWeather;

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

  return `${date.getDate()} ${month} ${date.getFullYear()}, ${day}. ${date.getHours()}:${date.getMinutes()}`;
}

function getWeather() {
  fetch(`${baseLink}${method}?id=${city.value}&cnt=${hoursNum}&appid=ef055dc2a3ce7e62285e867ad3dd0302`)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
      document.querySelector(".weather__temp").innerHTML = (forecast) ? Math.round(data.list[0].main.temp - 273) + " " + "&#8451" : Math.round(data.main.temp - 273) + " " + "&#8451";
      document.querySelector(".weather__clouds").textContent = (forecast) ? data.list[0].weather[0].description : data.weather[0].description;
      document.querySelector(".weather__humidity").textContent = (forecast) ? data.list[0].main.humidity + " %" : data.main.humidity + " %";
      document.querySelector(".weather__wind").textContent = (forecast) ? Math.round(data.list[0].wind.speed) + " м/с" : Math.round(data.wind.speed) + " м/с";
      let img = (forecast) ? `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png` : `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".weather__clouds-img").setAttribute("src", img);
    })
    .catch(function() {
      //catch any errors
    });
}

function createSelect() {
  let hours = document.createElement("div");
  hours.className = "select-label";
  hours.style.display = "block";
  hours.style.marginTop = "10px";
  hours.innerHTML = `Дальность  
<select class="weather__hours">
  <option value="2">+3 часа</option>
  <option value="3">+6 часов</option>
</select>`;
  // hours.innerHTML += `<button class="weather__btn">Обновить</button>`
  return hours;
}

function createForecasts(select) {
  for (let k = 0; k < weatherBlocks.length; k++) {
    for (let i = 0; i < weatherValues.length; i++) {
      for (let j = 0; j < select.value - 1; j++) {  //
        let newValue = document.createElement('div');
        //На основе класса каждого параметра создается элем-т с отдельным классом для вывода прогноза
        newValue.className = `${weatherValues[i].className.slice(9, -6)}`;
        //общий класс для удаления элементов
        newValue.className += `_${j + 1} new-value`;
        newValue.innerHTML = `${newValue.className}`;
        // weatherValues[i].after(newValue);
      }
      weatherBlocks[k].append(newValue);
    }
    // weatherBlocks[k].append(newValue);
  }
}


function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function rearrange() {

}

weather_option.addEventListener('change', function(e) {
  if ( weather_option.value === "current" && document.querySelector('.select-label') ) {
    removeElementsByClass("new-value");
    document.querySelector('.select-label').remove();
    method = `weather`;
    forecast = false;
  } else if ( weather_option.value === "forecast" ) {
    method = `forecast`;
    forecast = true;
    weather_option.after(createSelect());

    let hoursSelect = document.querySelector('.weather__hours');
    createForecasts(hoursSelect);
    hoursSelect.addEventListener('change', function(e) {

      removeElementsByClass("new-value");
      createForecasts(hoursSelect);


      hoursNum = hoursSelect.value;
      console.log(hoursNum);
      getWeather();
    });
  }
  getWeather();
});

city.addEventListener('change', function(e) {
  getWeather();
});