'use strict';

const content = document.querySelector('.content');
const wordInput = document.querySelector('#form-word');
const translationInput = document.querySelector('#form-translation');
const addBtn = document.querySelector('.form__btn');
const learnList = document.querySelector('.to-learn');
const learnedList = document.querySelector('.learnedWords');
/*
const vocabData = localStorage.getItem('vocabData') ?
  JSON.parse(localStorage.getItem('vocabData')):
  {toLearn: [], learnedWords: []};
 */
const vocabData = {toLearn: [], learnedWords: []};

const addElement = function(obj, word, translation) {
  obj.push({word, translation});
};

const clearFields = (...args) => {
  args.forEach((elem) => elem.value = '');
};

const render = function() {
  //Очищаем листы
  for (const elem of [learnList, learnedList]) elem.innerHTML = '';

  for (const key in vocabData) {
    let array = vocabData[key];
    array.forEach((elem, index) => {
      console.log(elem);
      const li = document.createElement('li');
      li.className = 'row';
      li.setAttribute('data-counter', `${array.length - index})`);
      // li.innerHTML =
      if (key === 'toLearn') {
        li.prepend(learnList);
      } else li.prepend(learnedList);
    });
  }

};

const vocabulary = function(root) {

  addBtn.addEventListener('click', (e) => { //Добавление слова
    e.preventDefault();
    const word = wordInput.value;
    const translation = translationInput.value;
    if (word && translation) {
      vocabData.toLearn.push({word, translation});
      // console.log(vocabData);
      clearFields(wordInput, translationInput);
      localStorage.setItem('vocabData', JSON.stringify(vocabData));
      render();
    }
  });
  render();


};


vocabulary(content);




