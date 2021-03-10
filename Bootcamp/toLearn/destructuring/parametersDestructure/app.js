const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// function print(person) {
//   const {first, last, title} = person;
//   console.log(`${first} ${last} ${title}`);
// }

// print(runner);


function print({first, last, title}) {
  console.log(`${first} ${last} ${title}`);
}

print(runner);

//The same with arrays

const response = [
  'HTTP/1.1',
  '200 0K',
  'application/json',
];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`${protocol}`);
  console.log(`${statusCode}`);
  console.log(`${contentType}`);
}

parseResponse(response);