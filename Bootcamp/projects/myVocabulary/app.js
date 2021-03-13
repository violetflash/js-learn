// let txt = document.querySelector('.input');
//
// txt.addEventListener('keypress', function(e) {
//   if ( e.key === 'Enter' ) {
//     if ( !this.value ) return;
//     const li = document.createElement('li');
//     li.innerText = this.value;
//     li.style.cursor = 'pointer';
//     this.value = "";
//     const list = document.querySelector('.list');
//     list.appendChild(li);
//     li.addEventListener('click', function(e) {
//       this.classList.toggle('done');
//     });
//     li.addEventListener('contextmenu', function(e) {
//       e.preventDefault();
//       this.remove();
//     });
//   }
// });

/*
const toDoObject = {
  word: document.querySelector('#word'),
  translation: document.querySelector('#translation'),
  addBtn: document.querySelector('.btn-add'),
  vocab: [],
  ul: document.querySelector('.vocab'),
  addNewWord() {
    const {word, translation, vocab} = toDoObject;
    vocab.push({
      'word': word.value,
      'translation': translation.value
    })
    console.log(vocab);
  }
}


const {addBtn, addNewWord} = toDoObject;
addBtn.addEventListener('click', addNewWord);
 */

function addNewWord() {
  let word = document.querySelector('#word').value;
  let translation = document.querySelector('#translation').value;
  if ( word  && translation ) {
    vocab.push({
      'word': word,
      'translation': translation
    });
    createRow(word, translation, vocab);
  }
  console.log(vocab);
  document.querySelector('#word').value = '';
  document.querySelector('#translation').value = '';

}


function createRow(word, translation, array) {
  const ul = document.querySelector('.vocab');
  ul.innerHTML = '';
  array.forEach(function(object, index) {
    const li = document.createElement('li');
    li.classList.add('row');
    const wordBlock = document.createElement('span');
    wordBlock.innerText = object.word;
    wordBlock.classList.add('word');

    const translationBlock = document.createElement('span');
    translationBlock.classList.add('translation');
    translationBlock.innerText = object.translation;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', function() {
      if ( object.word === word ) {
        console.log(`removing ${word}`);
        array.splice(index, 1);
      }
      this.parentNode.remove();
    });

    li.appendChild(wordBlock);
    li.appendChild(translationBlock);
    li.appendChild(removeBtn);
    ul.appendChild(li);
  })

}

const addBtn = document.querySelector('.btn-add');
const vocab = [];

addBtn.addEventListener('click', addNewWord);




