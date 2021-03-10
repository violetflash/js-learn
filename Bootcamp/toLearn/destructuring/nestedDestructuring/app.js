const results = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
},
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
];

//this will extract individual values into variables to unpack them
const [{first: goldWinner}, {country}] = results;
console.log(country) //Ethiopia
console.log(goldWinner) //Eliud

const [, silverMedal] = results;
const {country: silverCountry} = silverMedal;
console.log(silverCountry) //Ethiopia