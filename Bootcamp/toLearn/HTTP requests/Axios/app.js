/*
AXIOS is just a simple clean syntax that removes some of the minor pain points of using fetch
 */

const printPlanets = ({data}) => {  //uses destructure to pull out data property
  const planets = data.results;
  planets.forEach((item) => {
    console.log(item.name)
  })
  return Promise.resolve(data.next);
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