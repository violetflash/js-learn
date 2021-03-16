//todo: word editing functionality, sorting bug fix, confirm deleting

const toDoObject = {
  word: document.querySelector('#word'),
  translation: document.querySelector('#translation'),
  addBtn: document.querySelector('.btn-add'),
  title: document.querySelector('.title'),
  titleCounter: document.querySelector('.title-counter'),
  learnedTitle: document.querySelector('.learned-title'),

  vocab: localStorage.getItem('vocab') ? JSON.parse(localStorage.getItem('vocab')) : {toLearn: [], learnedWords: []},
  ul: document.querySelector('.to-learn'),
  ulLearned: document.querySelector('.learned'),

  addNewWord() {
    const {word, translation, vocab, render} = toDoObject;
    if ( word.value && translation.value ) {
      vocab.toLearn.push({
        'word': word.value.toLowerCase(),
        'translation': translation.value.toLowerCase(),
      })
      localStorage.setItem('vocab', JSON.stringify(vocab));
      render();
      word.value = '';
      translation.value = '';
    }
    console.log(vocab.toLearn);
    console.log(vocab.learnedWords);
  },

  //обновление заголовка и счетчика слов
  refreshTitle() {
    const {vocab, title, learnedTitle} = toDoObject;

    //words title
    title.textContent = vocab.toLearn.length > 0 ? 'Words to learn:' : 'No words added';
    const titleCounter = document.createElement('span');
    titleCounter.className = 'title-counter';
    if ( vocab.toLearn.length > 0 && !document.querySelector('.title-counter') ) {
      document.querySelector('.title-box').appendChild(titleCounter);
    }
    if ( document.querySelector('.title-counter') ) {
      document.querySelector('.title-counter').innerText = vocab.toLearn.length;
    }

    //learned words title
    learnedTitle.textContent = vocab.learnedWords.length > 0 ? 'Words learned:' : 'No words learned';
    const learnedTitleCounter = document.createElement('span');
    learnedTitleCounter.className = 'learned-title-counter';
    if ( vocab.learnedWords.length > 0 && !document.querySelector('.learned-title-counter') ) {
      document.querySelector('.learned-title-box').appendChild(learnedTitleCounter);
    }
    if ( document.querySelector('.learned-title-counter') ) {
      document.querySelector('.learned-title-counter').innerText = vocab.learnedWords.length;
    }
  },

  addSorting(array, place) {
    const {vocab, sortWords, render, shuffle} = toDoObject;
    const sortLabel = document.createElement('label');
    sortLabel.className = array === vocab.toLearn ? 'sort-label' : 'learned-sort-label';
    sortLabel.innerHTML = 'Sort by:' +
      '<button class="sort-btn" type="button"></button>' +
      '<button class="shuffle-btn" type="button"></button>';
    place.before(sortLabel);
    const sortButtons = document.querySelectorAll('.sort-btn');
    const shuffleButtons = document.querySelectorAll('.shuffle-btn');
    sortButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        sortWords(array);
        localStorage.setItem('vocab', JSON.stringify(vocab));
        render();
      });
    })
    shuffleButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        shuffle(array);
        localStorage.setItem('vocab', JSON.stringify(vocab));
        render();
      });
    })
  },

  sortWords(array) {
    // const {vocab} = toDoObject;
    function compare(a, b) {
      if ( a.word < b.word ){
        return -1;
      }
      if ( a.word > b.word ){
        return 1;
      }
      return 0;
    }
    array.sort(compare);
  },

  //  Fisher Yates Shuffle
  shuffle(array) {
    // const {vocab} = toDoObject;
    for ( let i = array.length - 1; i > 0; i--) {
      //  pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //  swap in place (shorthand way of swapping elements using destructuring
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  removeThings(array) {
    const {vocab} = toDoObject;
    if ( array === vocab.toLearn ) {
      if ( array.length === 0 ) document.querySelector('.title-counter').remove();
      if ( array.length === 1 ) document.querySelector('.sort-label').remove();
    } else if ( array === vocab.learnedWords ) {
      if ( array.length === 0 ) document.querySelector('.learned-title-counter').remove();
      if ( array.length === 1 ) document.querySelector('.learned-sort-label').remove();
    }
  },
  //  отрисовка массива
  render: function render() {
    const {vocab, refreshTitle, ul, addSorting, ulLearned, removeThings} = toDoObject;
    //  затираем список для отрисовки нового
    ul.innerHTML = '';
    ulLearned.innerHTML = '';
    if ( vocab.toLearn.length > 1 && !document.querySelector('.sort-label') ) {
      addSorting(vocab.toLearn, ul);
    }
    if ( vocab.learnedWords.length > 1 && !document.querySelector('.learned-sort-label') ) {
      addSorting(vocab.learnedWords, ulLearned);
    }

    //  для каждого итема массива рисуем li
    for (const key in vocab) {
      const array = vocab[key];
      array.forEach(function(item, index) {
        const li = document.createElement('li');
        //attribute for the pseudo-el counter
        li.setAttribute('data-counter', `${index+1})`);
        refreshTitle();
        li.classList.add('row');

        //creates word div
        const wordBlock = document.createElement('span');
        wordBlock.innerHTML = `<b>${item.word}</b>`;
        wordBlock.classList.add('word');

        //  creates translation div
        const translationBlock = document.createElement('span');
        translationBlock.classList.add('translation');
        translationBlock.innerText = item.translation;

        //  creates controls block
        const controls = document.createElement('div');
        controls.className = 'controls';

        //  creates Delete button
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', function(e) {
          //удаляем из массива объект
          array.splice(index, 1);
          localStorage.setItem('vocab', JSON.stringify(vocab));
          //перерисовка
          render();
          refreshTitle();
          removeThings(array);
        });

        //  Creates Move  button
        const moveBtn = document.createElement('button');
        moveBtn.classList.add('move-btn');
        moveBtn.innerHTML = array === vocab.toLearn ? 'move to <b>Learned</b>' : 'move to <b>Vocab</b>';
        moveBtn.addEventListener('click', function(e) {
          if ( array === vocab.toLearn ) {
            vocab.learnedWords.push(item);
          } else if ( array === vocab.learnedWords ) {
            vocab.toLearn.push(item);
          }
          //  удаляем из массива объект
          array.splice(index, 1);
          localStorage.setItem('vocab', JSON.stringify(vocab));
          console.log(array);
          //перерисовка
          render();
          refreshTitle();
          removeThings(array);
        });

        //  creates Edit button
        const editBtn = document.createElement('a');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '<span class="tooltip">Edit</span>';
        //  Opens modal window with edit functionality
        editBtn.addEventListener('click', function(e) {
          console.log('this opens the modal with functionality to edit this word');

        });

        //  inserting elements
        controls.appendChild(removeBtn);
        controls.appendChild(moveBtn);
        controls.appendChild(editBtn);
        li.appendChild(wordBlock);
        li.appendChild(translationBlock);
        li.appendChild(controls);

        if ( array === vocab.toLearn ) {
          ul.appendChild(li);
        } else if ( array === vocab.learnedWords ) {
          ulLearned.appendChild(li);
        }


        // shows-hides Buttons
        li.addEventListener('mouseenter', function() {
          li.querySelector('.controls').classList.add('visible');
        })
        li.addEventListener('mouseleave', function() {
          li.querySelector('.controls').classList.remove('visible');
        })

      })
    }

  },
}


const {addBtn, addNewWord, translation, word, render} = toDoObject;
addBtn.addEventListener('click', addNewWord);
translation.addEventListener('keypress', function(e) {
  if ( e.key === 'Enter' ) addNewWord();
  word.focus();
});

window.addEventListener('load', function(e) {
  render();
})

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('#overlay-modal');
  const closeButton = document.querySelector('.js-modal-close');
});


