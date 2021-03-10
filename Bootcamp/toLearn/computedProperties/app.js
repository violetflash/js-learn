const role = 'host';
const person = 'Jools Holland';
const role2 = 'director';
const person2 = 'James Cameron';

const team = {
  [role]: person,
  [role2]: person2,
};

console.log(team);

const copyWithNewKey = (obj, key, value) => {
  return {
    ...obj, //a simple way to copy all the properties of object (make clone)
    [key]: value,
  };
}

console.log(copyWithNewKey(team, 'happy', '=)'));