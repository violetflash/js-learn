let words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек"
];

let results = {};

function greetings() {
  return prompt(`Привет! это игра "ВИСЕЛИЦА"! Как тебя зовут?`, "");
}

function generateWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function hideAnswer(word) {
  let answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
}

function showProgress(answerArray) {
  alert(`Загаданное слово: ${answerArray.join(" ")}`);
}

function updateAnswer(word, guess, answerArray) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArray[i] = guess;
      count++;
    }
  }
  return count;
}

function game() {
  const word = generateWord();
  let answerArray = hideAnswer(word);
  let remainingLetters = word.length;
  let attempts = 0;
  let quit = false;


  while (remainingLetters > 0) {
    showProgress(answerArray);
    let guess = prompt(`Угадайте букву или нажмите "Отмена" для выхода из игры:`, "");

    if (guess === null) {
      break;
    } else if (isNaN(guess) && guess.length !== 1) {
      alert(`Можно ввести лишь ОДНУ букву`);
    } else if (!isNaN(guess)) {
      alert(`Принимаются только БУКВЫ!`);
    } else {

      //Обновление состояния игры
      attempts++;
      //проверяем, что эта буква еще не отгадана
      if (answerArray.indexOf(guess) === -1) {
        let correctGuesses = updateAnswer(word, guess, answerArray);
        remainingLetters -= correctGuesses;
      }
    }
  }
  showProgress(answerArray);
  alert("Отлично! Было загадано слово " + word + ". Попыток понадобилось: " + attempts);
  alert(`Пока!`);
}

game();

/*

//main loop
let attempts = 0;
while (remainingLetters > 0) {
  alert(`Загаданное слово: ${answerArray.join(" ")}`);
  let guess = prompt(`Угадайте букву или нажмите "Отмена" для выхода из игры:`, "");

  if (guess === null) {
    break;
  } else if ( isNaN(guess) && guess.length !== 1 ) {
    alert(`Можно ввести лишь ОДНУ букву`);
  } else if ( !isNaN(guess)) {
    alert(`Принимаются только БУКВЫ!`);
  } else {
    //Обновление состояния игры
    attempts++;
    if ( answerArray.indexOf(guess) === -1 ) {
      for (let i = 0; i < word.length; i++) {
        if ( word[i] === guess ) {
          answerArray[i] = guess;
          remainingLetters--;
        }
      }
    }
  }
}
alert(`Молодец! Слово "${word}" отгадано! Попыток понадобилось: ${attempts}`);

 */