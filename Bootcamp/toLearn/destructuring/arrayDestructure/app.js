const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

const [gold, silver, bronze] = raceResults;

console.log(gold);
console.log(silver);
console.log(bronze);

const [first1] = raceResults;
console.log(first1);

const [first, , , fourth] = raceResults;
console.log(first);
console.log(fourth);

console.log('=======')
const [winner, ,...others] = raceResults; //using Rest to group others (skipping idx 1)
console.log(others);

