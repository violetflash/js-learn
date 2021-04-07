'use strict';

const vocabData = localStorage.getItem('vocab') ? JSON.parse(localStorage.getItem('vocab')) : {
  "toLearn":
    [
      {"word": "persecution", "translation": "преследование"},
      {"word": "vague", "translation": "нечёткий"},
      {"word": "urgent", "translation": "срочный"},
      {"word": "flock", "translation": "стадо"},
      {"word": "fruitful", "translation": "плодотворный"},
      {"word": "clunky", "translation": "неуклюжий"},
      {
        "word": "treat this as though",
        "translation": "относиться к этому так, как будто"
      },
    ],
  "learnedWords": [{"word": "abrogate", "translation": "аннулировать"},]
};


const vocabConfig = {
  addBtn: document.querySelector('.add-btn'),
  word: document.querySelector('#word'),
  translation: document.querySelector('#translation'),
  rowTemplate(word, translation) {
    return `  <span class="word">${word}</span>
              <span class="translation">${translation}</span>`;
  },
  moveWord(vocab) {

  }
};


const createVocab = ({root, title, vocab, controls, addBtn, rowTemplate, onHover, word, translation, vocabData}) => {

  root.insertAdjacentHTML('beforebegin', title);

  const render = vocab => {
    vocab.forEach((obj, index) => {

      const li = document.createElement('li');
      li.innerHTML = rowTemplate(obj.word, obj.translation);
      li.className = 'row';
      li.setAttribute('data-counter', `${vocab.length - index})`);
      li.insertAdjacentHTML('beforeend', controls);
      root.prepend(li);

      li.addEventListener('mouseenter', () => {
        li.querySelector('.controls').classList.add('visible');
      });
      li.addEventListener('mouseleave', () => {
        li.querySelector('.controls').classList.remove('visible');
      });
    });

  };
  render(vocab);
};

createVocab({
  title: `<div class="title-box">
            <h2 class="to-learn-title title" data-text="Words to learn">No words added</h2>
          </div>`,
  root: document.querySelector('.to-learn'),
  ...vocabConfig,
  vocab: vocabData.toLearn,
  controls: `<div class="controls">
              <button class="remove-btn" type="button"></button> 
              <button class="move-btn" type="button">Move to Learned</button> 
              <a class="edit-btn">
                <span class="tooltip">Edit</span>
              </a> 
            </div>`,

});

createVocab({
  title: `<div class="title-box">
            <h2 class="learned-title title" data-text="Learned words">No words learned</h2>
          </div>`,
  root: document.querySelector('.learned'),
  ...vocabConfig,
  vocab: vocabData.learnedWords,
  controls: `<div class="controls">
              <button class="remove-btn" type="button"></button> 
              <button class="move-btn" type="button">Move to Vocab</button> 
              <a class="edit-btn">
                <span class="tooltip">Edit</span>
              </a> 
            </div>`,
});

function rowTemplate(word, translation) {
  return `<li class="row">
            <span class="word">${word}</span>
            <span class="translation">${translation}</span>
          </li>`;
}