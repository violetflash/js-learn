//todo localstorage, database, google translate API, refactoring, render function wrap

const toDoObject = {
  word: document.querySelector('#word'),
  translation: document.querySelector('#translation'),
  addBtn: document.querySelector('.btn-add'),
  title: document.querySelector('.title'),
  titleCounter: document.querySelector('.title-counter'),
  learnedTitle: document.querySelector('.learned-title'),
  vocab: [],
  learnedWords: [],
  ul: document.querySelector('.vocab'),
  ulLearned: document.querySelector('.learned'),

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

  //обновление заголовка и счетчика слов
  refreshTitle() {
    const {vocab, title, learnedWords, learnedTitle} = toDoObject;
    //words title
    title.textContent = vocab.length > 0 ? 'Words to learn' : 'No words added';
    const titleCounter = document.createElement('span');
    titleCounter.className = 'title-counter';
    if ( vocab.length > 0 && !document.querySelector('.title-counter') ) {
      document.querySelector('.title-box').appendChild(titleCounter);
    }
    if ( document.querySelector('.title-counter') ) {
      document.querySelector('.title-counter').innerText = vocab.length;
    }

    //learned words title
    learnedTitle.textContent = learnedWords.length > 0 ? 'Words learned' : 'No words learned';
    const learnedTitleCounter = document.createElement('span');
    learnedTitleCounter.className = 'learned-title-counter';
    if ( learnedWords.length > 0 && !document.querySelector('.learned-title-counter') ) {
      document.querySelector('.learned-title-box').appendChild(learnedTitleCounter);
    }
    if ( document.querySelector('.learned-title-counter') ) {
      document.querySelector('.learned-title-counter').innerText = learnedWords.length;
    }
  },

  addSortSelect() {
    const {vocab, ul, sortWords, render, shuffle} = toDoObject;
    if ( vocab.length > 1 && !document.querySelector('.sort-label') ) {
      const sortLabel = document.createElement('label');
      sortLabel.className = 'sort-label';
      sortLabel.innerHTML = 'Sort by' +
        '<select class="sort">' +
        '<option>Choose option</option>' +
        '<option value="alphabetic">alphabetic</option>' +
        '<option value="shuffle">shuffle words</option>' +
        '</select>' +
        ''
      ul.before(sortLabel);
      const select = document.querySelector('.sort');
      select.addEventListener('change', () => {
        if ( select.value === 'alphabetic' ) {
          sortWords();
          render();
        } else if ( select.value === 'shuffle' ) {
          console.log('trying to shuffle an array...')
          shuffle();
          render();
        }
      })
    } else {

    }
  },

  sortWords() {
    const {vocab} = toDoObject;
    function compare(a, b) {
      if ( a.word < b.word ){
        return -1;
      }
      if ( a.word > b.word ){
        return 1;
      }
      return 0;
    }
    vocab.sort(compare);
  },

  //Fisher Yates Shuffle
  shuffle() {
    const {vocab} = toDoObject;
    for ( let i = vocab.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap in place (shorthand way of swapping elements using destructuring
      [vocab[i], vocab[j]] = [vocab[j], vocab[i]];
    }
  },

  //отрисовка массива
  render: function render() {
    const {vocab, refreshTitle, ul, addSortSelect, learnedWords, ulLearned} = toDoObject;
    //затираем список для отрисовки нового
    ul.innerHTML = '';
    ulLearned.innerHTML = '';
    addSortSelect();

    //для каждого итема массива рисуем li
    vocab.forEach(function(item, index) {
      const li = document.createElement('li');
      li.setAttribute('data-counter', `${index+1})`);
      refreshTitle();
      li.classList.add('row');

      const wordBlock = document.createElement('span');
      wordBlock.innerHTML = `<b>${item.word}</b>`;
      wordBlock.classList.add('word');

      const translationBlock = document.createElement('span');
      translationBlock.classList.add('translation');
      translationBlock.innerText = item.translation;

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', function(e) {
        //удаляем из массива объект
        vocab.splice(index, 1);
        //перерисовка
        render();
        refreshTitle();
        if ( vocab.length === 0 ) document.querySelector('.title-counter').remove();
        if ( vocab.length === 1 ) document.querySelector('.sort-label').remove();
      });

      const moveBtn = document.createElement('button');
      moveBtn.classList.add('move-btn');
      moveBtn.innerHTML = 'move to <b>Learned</b>';
      moveBtn.addEventListener('click', function(e) {
        learnedWords.push(item);
        //удаляем из массива объект
        vocab.splice(index, 1);
        //перерисовка
        render();
        refreshTitle(vocab);
        if ( vocab.length === 0 ) document.querySelector('.title-counter').remove();
        if ( vocab.length === 1 ) document.querySelector('.sort-label').remove();
      });

      li.appendChild(wordBlock);
      li.appendChild(translationBlock);
      li.appendChild(removeBtn);
      li.appendChild(moveBtn);
      ul.appendChild(li);
    })

    //отрисовка
    learnedWords.forEach(function(item, index) {
      const li = document.createElement('li');
      li.setAttribute('data-counter', `${index+1})`);
      refreshTitle();
      li.classList.add('row');

      const wordBlock = document.createElement('span');
      wordBlock.innerHTML = `<b>${item.word}</b>`;
      wordBlock.classList.add('word');

      const translationBlock = document.createElement('span');
      translationBlock.classList.add('translation');
      translationBlock.innerText = item.translation;

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', function(e) {
        //удаляем из массива объект
        learnedWords.splice(index, 1);
        //перерисовка
        render();
        refreshTitle();
        if ( learnedWords.length === 0 ) document.querySelector('.learned-title-counter').remove();
        // if ( learnedWords.length === 1 ) document.querySelector('.sort-label').remove();
      });

      const moveBtn = document.createElement('button');
      moveBtn.classList.add('move-btn');
      moveBtn.innerHTML = 'move to <b>Vocab</b>';
      moveBtn.addEventListener('click', function(e) {
        vocab.push(item);
        //удаляем из массива объект
        learnedWords.splice(index, 1);
        console.log(learnedWords);
        //перерисовка
        render();
        refreshTitle();
        if ( learnedWords.length === 0 ) document.querySelector('.learned-title-counter').remove();
        // if ( vocab.length === 1 ) document.querySelector('.sort-label').remove();
      });

      li.appendChild(wordBlock);
      li.appendChild(translationBlock);
      li.appendChild(removeBtn);
      li.appendChild(moveBtn);
      ulLearned.appendChild(li);
    })
  },
}


const {addBtn, addNewWord, translation, word} = toDoObject;
addBtn.addEventListener('click', addNewWord);
translation.addEventListener('keypress', function(e) {
  if ( e.key === 'Enter' ) addNewWord();
  word.focus();
});

