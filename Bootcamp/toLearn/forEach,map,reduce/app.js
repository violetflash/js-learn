const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.11,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

console.log('.sort - cортировка по рейтингу (Изменяет порядок оригинального массива)');
books.sort((a, b) => a.rating - b.rating);
console.log(books);

console.log('.forEach - просто вывод данных из массива');
books.forEach( (book, idx) => console.log(`${idx+1}: ${book.title} - ${book.rating}`));

console.log(".map - то же самое, только создаётся новый массив с результатом");
const bookInfo = books.map( (book, idx) => `${idx+1}: ${book.title} - ${book.rating}`);
console.log(bookInfo);

console.log(".reduce - создадим новый объект на основе массива книг");
const booksWithRating = books.reduce( (obj, book) => {
  obj[book.title] = book.rating;
  return obj;
}, {} )
console.log(booksWithRating);

console.log('Подсчет голосов:')
let votes = [];
for (let i = 0; i < 21; i++) {
  let vote = ( Math.random()) > 0.5 ? 'y' : 'n';
  votes.push(vote);
}

const results = votes.reduce( (tally, vote) => {
  // (tally[vote]) ? tally[vote]++ : tally[vote] = 1;
  tally[vote] = ( tally[vote] || 0 ) + 1;
  return tally;
}, {} );
console.log(results);

console.log('Группировка книг по рейтингу в объект по ключу');
console.log(books);
const booksRaiting = books.reduce( (obj, book) => {
  let key = Math.floor(book.rating);
  if ( !obj[key] ) obj[key] = [];
  obj[key].push(book);
  return obj;
}, {});

console.log(booksRaiting);