let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

const films = movies.map((movie, idx) => `${idx + 1}: ${movie}`);

console.log(films);

console.log('========================');

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

const aGoodBook = books.filter((book => book.rating > 4.3));
const nielBook = books.filter(book => (
  book.authors.includes('Neil Gaiman'))
);

const search1 = books.filter(book => (
    book.authors.includes('Neil Gaiman') || book.rating > 4.4
  )
);

books.sort((a, b) => a.rating - b.rating);

// console.log(aGoodBook);
// console.log(nielBook);
console.log(books);
console.log(search1);

const nums = [400.1, 5000, 12, 0, -500, 357.9, -45000, 10];

console.log(nums.slice().sort( (a, b) => a - b ));
console.log(nums.slice().sort( (a, b) => b - a ));
console.log(nums);


(function() {alert("Скобки вокруг всего")}() );
