// fetch('http://www.omdbapi.com/?apikey=a2f944ea&t=knight')
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     })
//   })

const checkStatusAndParse = (response) => {
  if ( !response.ok ) {
    throw new Error(`Error status code: ${response.status}`);
  } else {
    return response.json();
  }
}

const printPlanets = (data) => {
  data.results.forEach((item) => {
    const ul = document.querySelector('.planets');
    document.body.append(ul);
    const li = document.createElement('li');
    li.textContent = item.name;
    ul.append(li)
    console.log(item.name);
  })
  // return new Promise((resolve, reject) => {  //Если функция без возврата промиса, можно вернуть новый с резолвом, отдав ему аргумент, таким образом следующий then получит все данные
  //   resolve(data.next);
  // });
  return Promise.resolve(data.next); //An easier way to get a new resolved promise
}

const fetchNext = (url = 'http://swapi.dev/api/planets/') => {
  return fetch(url);
}

fetchNext() //we got a promise back from the fetch method
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNext)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNext)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNext)
  .catch((err) => {
    console.log('SOMETHING WENT WRONG!')
    console.log(err);
  })