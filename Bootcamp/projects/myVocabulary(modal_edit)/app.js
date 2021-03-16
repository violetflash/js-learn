//todo: sorting bug fix, multiple runs bug with confirm deleting, highlighting new LI when created or switched

//======= closest lib ========
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
//======


const toDoObject = {
  word: document.querySelector('#word'),
  translation: document.querySelector('#translation'),
  addBtn: document.querySelector('.btn-add'),
  title: document.querySelector('.title'),
  titleCounter: document.querySelector('.title-counter'),
  learnedTitle: document.querySelector('.learned-title'),

  // vocab: localStorage.getItem('vocab') ? JSON.parse(localStorage.getItem('vocab')) : {toLearn: [], learnedWords: []}, // AN EMPTY
  vocab: localStorage.getItem('vocab') ? JSON.parse(localStorage.getItem('vocab')) : {
    "toLearn": [
      {"word": "persecution", "translation": "преследование"},
      {"word": "vague", "translation": "нечёткий"},
      {"word": "urgent", "translation": "срочный"},
      {"word": "flock", "translation": "стадо"},
      {"word": "abrogate", "translation": "аннулировать"},
      {"word": "fruitful", "translation": "плодотворный"}
    ],
    "learnedWords": []
  },
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
    if ( array === vocab.toLearn /* && (document.querySelector('.title-counter') || document.querySelector('.sort-label') )*/) {
      if ( array.length === 0 ) document.querySelector('.title-counter').remove();
      if ( array.length === 1 ) document.querySelector('.sort-label').remove();
    } else if ( array === vocab.learnedWords /* && (document.querySelector('.learned-title-counter') || document.querySelector('.learned-sort-label'))*/) {
      if ( array.length === 0 ) document.querySelector('.learned-title-counter').remove();
      if ( array.length === 1 ) document.querySelector('.learned-sort-label').remove();
    }
  },

  //  отрисовка массива
  render: function render() {
    let {vocab, refreshTitle, ul, addSorting, ulLearned, removeThings} = toDoObject;



    // Functions for modal
    function lockScreen() {
      document.querySelector('#overlay-modal').classList.add('active');
      document.body.classList.add('js-lock');
    }

    function unlockScreen() {
      document.querySelector('#overlay-modal').classList.remove('active');
      document.body.classList.remove('js-lock');
    }

    function modalClose() {
      const closeModalBtns = document.querySelectorAll('.modal__close');
      closeModalBtns.forEach((btn)=> {
        btn.addEventListener('click', function(e) {
          const parentModal = this.closest('.modal');
          parentModal.classList.remove('active');
          unlockScreen();
        });
      })

    }

    // New word adding
    addBtn.addEventListener('click', addNewWord);
    translation.addEventListener('keypress', function(e) {
      if ( e.key === 'Enter' ) addNewWord();
      word.focus();
    });
    //  Clearing rows before the new render()
    ul.innerHTML = '';
    ulLearned.innerHTML = '';

    // Adding sorting options if array > 1
    if ( vocab.toLearn.length > 1 && !document.querySelector('.sort-label') ) {
      addSorting(vocab.toLearn, ul);
    }
    if ( vocab.learnedWords.length > 1 && !document.querySelector('.learned-sort-label') ) {
      addSorting(vocab.learnedWords, ulLearned);
    }

    //  Makes <li> element for each of array's item
    for (const key in vocab) {
      const array = vocab[key];
      array.forEach(function(item, index) {

        const li = document.createElement('li');
        //attribute for the pseudo-el counter
        li.setAttribute('data-counter', `${index+1})`);
        refreshTitle();
        li.classList.add('row');

        /*
        //  Highlighting last LI (BUG)
        const rows = document.querySelectorAll('.row');
        rows[rows.length-1].classList.add('highlighting');
        setInterval(()=> {
          rows[rows.length-1].classList.remove('highlighting');
        }, 1000);
         */

        //creates div for word
        const wordBlock = document.createElement('span');
        wordBlock.innerHTML = `<b>${item.word}</b>`;
        wordBlock.classList.add('word');

        //  creates div for translation
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
          console.log(1)
          //удаляем из массива объект
          if (confirm(`Delete word "${item.word.toUpperCase()}"?`)) array.splice(index, 1);
          localStorage.setItem('vocab', JSON.stringify(vocab));
          refreshTitle();
          removeThings(array);
          //перерисовка
          render();
        });
        /*
        let counter = 0;
        removeBtn.addEventListener('click', function(e) {
          counter++;
          // console.log(`Index: ${index}, counter: ${counter}`);

          //show modal
          document.querySelector('.modal[data-modal="delete"]').classList.add('active');
          lockScreen();

          //  DELETE Modal title
          document.querySelector('.modal__delete-word').innerText = item.word;

          // DELETE Modal submit button
          const deleteBtn = document.querySelector('.modal__delete-btn');
          deleteBtn.addEventListener('click', function(e) {
            console.log(`Index: ${index}, counter: ${counter}`);

            e.preventDefault();
            // console.log(index);
            array.splice(index, 1);
            localStorage.setItem('vocab', JSON.stringify(vocab));
            render();
            refreshTitle();
            removeThings(array);

            // Closing EDIT modal
            const parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            // Unlock screen
            unlockScreen();

            // Modal close (cross) button
          });
          modalClose();
        });
        // Modal buttons (Yes/No) event

        // const undoBtn = document.querySelector('.modal__undo-btn');
        // undoBtn.addEventListener('click', function(e) {
        //   const parentModal = this.closest('.modal');
        //   parentModal.classList.remove('active');
        //   unlockScreen();
        // });
        // //Modal close(cross) button
        // modalClose();
        */

        //  Creates Move  button
        const moveBtn = document.createElement('button');
        moveBtn.classList.add('move-btn');
        moveBtn.innerHTML = array === vocab.toLearn ? 'to <b>Learned</b>' : 'to <b>Vocab</b>';
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

        //  =========EDIT MODAL BEHAVIOR============= Opens modal window with edit functionality
        editBtn.addEventListener('click', function(e) {

          e.preventDefault();
          //show modal
          document.querySelector('.modal[data-modal="edit"]').classList.add('active');
          lockScreen();

          //  EDIT Modal inputs
          const editWord = document.querySelector('.form__input[name="word"]');
          const editTranslation = document.querySelector('.form__input[name="translation"]');
          editWord.value = item.word;
          editTranslation.value = item.translation;

          // EDIT Modal submit button
          const submitBtn = document.querySelector('.form__btn');
          submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if ( editWord.value === '' ) editWord.value = item.word;
            if ( editTranslation.value === '' ) editTranslation.value = item.translation;
            item.word = editWord.value;
            item.translation = editTranslation.value;
            localStorage.setItem('vocab', JSON.stringify(vocab));
            render();

            // Closing EDIT modal
            const parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            // Unlock screen
            unlockScreen();

            // Modal close (cross) button
          });
          modalClose();
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
        
        //Shows DELETE VOCAB button
        const deleteAll = document.querySelector('.delete-all');
        if ( array.length > 1 ) {
          deleteAll.classList.add('visible');
        } else {
          deleteAll.classList.remove('visible');
        }
        deleteAll.addEventListener('click', function(e) {
          if ( !confirm("Delete all data?") ) return;
          vocab = {toLearn: [], learnedWords: []};
          localStorage.setItem('vocab', JSON.stringify(vocab));
          render();
        });
      })
    }

  },
}


const {addBtn, addNewWord, translation, word, render} = toDoObject;


document.addEventListener('DOMContentLoaded', function() {
  render();
  const modal = document.querySelector('.modal');
  setTimeout(() => {
    modal.style.display = 'block';
    console.log(1)
  }, 1000)
});


