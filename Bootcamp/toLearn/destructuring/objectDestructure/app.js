const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

const {first} = runner;
const {last} = runner;
console.log(first);
console.log(last);

//we can change the name of variable:
const {country: nation, title: honorific} = runner;
console.log(nation); // 'Kenya'
console.log(honorific); // title text

//using Rest to collect the rest of object properties
const {first: leader, last: loser, ...otherProps} = runner;
console.log(otherProps);