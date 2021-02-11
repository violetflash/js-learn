"use strict"

function dateToString() {
  let today = new Date();
  let month = today.getMonth();
  let day = today.getDay();
  let hours = today.getHours();
  let hoursText = "";
  let hoursOutput;
  let minutes = today.getMinutes();
  let minutesText = "";
  let minutesOutput;
  let seconds = today.getSeconds();
  let secondsText = "";
  let secondsOutput;

  hours = ( hours < 10 ) ? `0${hours}` : hours;
  switch (String(hours)[1]) {
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": {
      hoursText = `часов`;
      break;
    }
    case "1": {
      hoursText = `час`;
      break;
    }
    case "2":
    case "3":
    case "4": {
      hoursText = `часа`;
      break;
    }
  }

  if ( Math.floor(hours / 10) === 1 ) {
    hoursText = `часов`;
  }

  hoursOutput = `${hours} ${hoursText}`;

  minutes = ( minutes < 10 ) ? `0${minutes}` : minutes;
  switch (String(minutes)[1]) {
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": {
      minutesText = `минут`;
      break;
    }
    case "1": {
      minutesText = `минута`;
      break;
    }
    case "2":
    case "3":
    case "4": {
      minutesText = `минуты`;
      break;
    }
  }

  if ( Math.floor(minutes / 10) === 1 ) {
    minutesText = `минут`;
  }

  minutesOutput = `${minutes} ${minutesText}`;


  seconds = ( seconds < 10 ) ? `0${seconds}` : seconds;

  switch (String(seconds)[1]) {
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": {
      secondsText = `секунд`;
      break;
    }
    case "1": {
      secondsText = `секунда`;
      break;
    }
    case "2":
    case "3":
    case "4": {
      secondsText = `секунды`;
      break;
    }
  }

  if ( Math.floor(seconds / 10) === 1 ) {
    secondsText = `секунд`;
  }

  secondsOutput = `${seconds} ${secondsText}`;



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



  return `Cегодня ${day}, ${today.getDate()} ${month} ${today.getFullYear()} года, ${hoursOutput} ${minutesOutput} ${secondsOutput}`;
}

console.log(dateToString());

