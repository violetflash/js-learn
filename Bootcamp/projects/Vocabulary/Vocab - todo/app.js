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
  for (const elem of [learnList, learnedList]) elem.innerHTML = '';

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
          <button class="move-btn" type="button">Move to ${moveBtnName}</button> 
          <a class="edit-btn">
            <span class="tooltip">Edit</span>
          </a> 
          </div>
      `;
      list.prepend(li);
      li.addEventListener('mouseover', function(e) {
        document.querySelector('.controls').classList.add('is-visible');
      });
      li.addEventListener('mouseleave', function(e) {
        document.querySelector('.controls').classList.remove('is-visible');
      });
    });
  }

  renderList(vocabData.toLearn, learnList, 'Learned', vocabData.learnedWords);
  renderList(vocabData.learnedWords, learnList, 'Vocab', vocabData.toLearn);


};

const vocabulary = function(root) {

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
    // console.log(vocabData);
    clearFields(wordInput, translationInput);
    localStorage.setItem('vocabData', JSON.stringify(vocabData));
    render();

  });
  render();


};


vocabulary(content);




