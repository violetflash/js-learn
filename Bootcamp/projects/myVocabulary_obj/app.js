//todo localstorage, database, google translate API, refactoring, calculate num of words in title

const toDoObject = {
  word: document.querySelector('#word'),
  translation: document.querySelector('#translation'),
  addBtn: document.querySelector('.btn-add'),
  vocab: [],
  ul: document.querySelector('.vocab'),
  addNewWord() {
    const {word, translation, vocab, render} = toDoObject;
    if ( word.value && translation.value ) {
      vocab.push({
        'word': word.value.toLowerCase(),
        'translation': translation.value.toLowerCase(),
      })
      render();
      word.value = '';
      translation.value = '';
    }
    console.log(vocab);
  },
  render: function render() {
    const {vocab} = toDoObject;
    //затираем список для отрисовки нового
    const ul = document.querySelector('.vocab');
    ul.innerHTML = '';
    //для каждого итема массива рисуем li
    vocab.forEach(function(item, index) {
      const li = document.createElement('li');
      li.setAttribute('data-counter', `${index+1})`);
      const h2 = document.querySelector('.title');
      let title = h2.getAttribute('data-name');
      h2.innerText = `${title} (${index+1}):`;
      li.classList.add('row');

      const wordBlock = document.createElement('span');
      wordBlock.innerHTML = `<b>${item.word}</b>`;
      wordBlock.classList.add('word');

      const translationBlock = document.createElement('span');
      translationBlock.classList.add('translation');
      translationBlock.innerText = item.translation;

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.setAttribute('alt', 'Delete this word');
      removeBtn.addEventListener('click', function(e) {
        //удаляем из массива объект
        vocab.splice(index, 1);
        //перерисовка
        render();

      });
      li.appendChild(wordBlock);
      li.appendChild(translationBlock);
      li.appendChild(removeBtn);
      ul.appendChild(li);
    })
  },
}


const {addBtn, addNewWord, translation, word} = toDoObject;
addBtn.addEventListener('click', addNewWord);
translation.addEventListener('keypress', function(e) {
  if ( e.key === 'Enter' ) addNewWord();
  word.focus();
});

