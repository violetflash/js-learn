"use strict"

function dateToString() {
  let today = new Date();
  let month = today.getMonth();
  let day = today.getDay();
  let hours = today.getHours();
  let hoursText = "";
  console.log(typeof hours);
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  console.log(typeof seconds);

  hours = ( hours < 10 ) ? `0${hours} ${hoursText}` : `${hours} ${hoursText}`;
  minutes = ( minutes < 10 ) ? `0${minutes}` : minutes;
  seconds = ( seconds < 10 ) ? `0${seconds}` : seconds;


  let tempHour = String(hours)[1];
  switch (tempHour) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: {
      hoursText = `часов`;
      break;
    }
    case 1: {
      hoursText = `час`;
      break;
    }
    case 2:
    case 3:
    case 4: {
      hoursText = `часа`;
      break;
    }
  }


  // if ( String(seconds)[0] !== "1" ) {

  switch (String(seconds)[1]) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: {
      seconds = `${seconds} секунд`;
      break;
    }
    case 1: {
      seconds = `${seconds} секунда`;
      break;
    }
    case 2:
    case 3:
    case 4: {
      seconds = `${seconds} секунды`;
      break;
    }
  }
  // }


  switch (day) {
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

  switch (month) {
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



  return `Cегодня ${day}, ${today.getDate()} ${month} ${today.getFullYear()} года, ${hours}:${minutes}:${seconds}`;
}

console.log(dateToString());

