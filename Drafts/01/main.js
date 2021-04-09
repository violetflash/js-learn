
function logPerson(s, name, age) {
  console.log( s, name, age);
  if (age < 0) {
    age = "так не бывает";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
const personName = 'Maksim';
const personName2 = 'Tanya';
const personAge = 35;
const personAge2 = -36;

const output = logPerson`Имя: ${personName}, Возраст:${personAge}!`;
console.log('output: ', output);
const output2 = logPerson`Имя: ${personName2}, Возраст:${personAge2}!`;
console.log('output2: ', output2);
