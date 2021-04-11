'use strict';

const content = document.querySelector('.content');
const wordInput = document.querySelector('#form-word');
const translationInput = document.querySelector('#form-translation');
const addBtn = document.querySelector('.form__btn');
const learnList = document.querySelector('.to-learn');
const learnedList = document.querySelector('.learnedWords');

const vocabData = localStorage.getItem('vocabData') ?
  JSON.parse(localStorage.getItem('vocabData')):
  {toLearn: [], learnedWords: []};

// const vocabData = {toLearn: [], learnedWords: []};

const addElement = function(obj, word, translation) {
  obj.push({word, translation});
};

const clearFields = (...args) => {
  args.forEach((elem) => elem.value = '');
};

const render = function() {
  //Очищаем листы
  for (const elem of [learnList, learnedList]) {
    elem.innerHTML = '';
  }

  function renderList(obj, list, moveBtnName, moveToObjName) {
    Object.values(obj).forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'row';
      li.setAttribute('data-counter', `${obj.length - index})`);
      li.innerHTML = `
          <span class="word">${item.word}</span>
          <span class="translation">${item.translation}</span>
          <div class="controls">
          <button class="remove-btn" type="button"></button> 
          <button class="move-btn" type="button">В ${moveBtnName}</button> 
          <a class="edit-btn">
            <span class="tooltip">Edit</span>
          </a> 
          </div>
      `;
      li.addEventListener('mouseover', function(e) {
        li.querySelector('.controls').classList.add('is-visible');
      });
      li.addEventListener('mouseleave', function(e) {
        li.querySelector('.controls').classList.remove('is-visible');
      });
      list.prepend(li);

      //MOVE BUTTON
      li.querySelector('.move-btn').addEventListener('click', () => {
        if (obj === vocabData.toLearn) {
          vocabData.learnedWords.push(item);
        } else if (obj === vocabData.learnedWords) {
          vocabData.toLearn.push(item);
        }
        obj.splice(index, 1);
        console.log(vocabData);
        localStorage.setItem('vocabData', JSON.stringify(vocabData));
        render();
      });

      li.querySelector('.remove-btn').addEventListener('click', () => {
        obj.splice(index, 1);
        li.remove();
        localStorage.setItem('vocabData', JSON.stringify(vocabData));
        render();
      });

      document.querySelectorAll('.word').forEach((elem) => {
        elem.addEventListener('click', function(e) {
          this.innerHTML = `<input class="edit-word" type="text" value="${this.innerText}">`;
        });
      });

      //EDIT

    });
  }

  renderList(vocabData.toLearn, learnList, 'Выполненные задачи', vocabData.learnedWords);
  renderList(vocabData.learnedWords, learnedList, 'Текущие задачи', vocabData.toLearn);

};

const vocabulary = function() {
  render();
  document.querySelectorAll('.form-input').forEach((elem) => {
    elem.addEventListener('input', () => {
      elem.classList.remove('error');
    });
  });

  addBtn.addEventListener('click', (e) => { //Добавление слова
    e.preventDefault();
    wordInput.focus();
    const word = wordInput.value;
    const translation = translationInput.value;
    for (const item of [wordInput, translationInput]) {
      if (!item.value) {
        item.classList.add('error');
        return;
      }
    }

    vocabData.toLearn.push({word, translation});
    clearFields(wordInput, translationInput);
    localStorage.setItem('vocabData', JSON.stringify(vocabData));
    render();
  });

  //EDIT WORD
  if (document.querySelector('.word')) {

  }

};


vocabulary();




