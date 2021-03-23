
async function printPlanets({data}) {  //uses destructure to pull out data property
  const planets = data.results;
  planets.forEach((item) => {
    const ul = document.querySelector('.planets');
    document.body.append(ul);
    const li = document.createElement('li');
    li.textContent = item.name;
    ul.append(li)
    console.log(item.name);
  })
  return data.next; //async functions always return resolved promise or reject (if you throw an error)
}

const fetchNext = (url = 'http://swapi.dev/api/planets/') => {
  return axios.get(url);
}

fetchNext()
  .then(printPlanets)
  .then(fetchNext)
  .then(printPlanets)
  .then(fetchNext)
  .then(printPlanets)
  .then(fetchNext)
  .then(printPlanets)
  .then(fetchNext)
  .catch((err) => {
    console.log(err);
  })

// AWAIT DEMO

async function getPlanets() {
  try {
    const res = await axios.get('http://swapi.dev/api/planetsgg/');
    console.log(res.data.results);
  } catch(e) {  // catches reject of THIS function, not for all as .catch
    console.log('IN CATCH!', e);
  }
}

// getPlanets().catch((err) => {
//   console.log("CATCHED AN ERROR!");
//   console.log(err);
// })

getPlanets()
