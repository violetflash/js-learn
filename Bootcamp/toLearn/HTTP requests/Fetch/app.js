fetch('http://swapi.dev/api/planets/') //we got a promise back from the fetch method
  .then((response) => {
    if ( !response.ok ) {
      throw new Error(`Error status code: ${response.status}`);
    } else {
      return response.json();
    }

})
  .then((data) => {
    const filmUrl = data.results[0].films[0];
    console.log(filmUrl);
    return fetch(filmUrl);
  })
  .then((response) => {
    if ( !response.ok ) {
      throw new Error(`Error status code: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((filmData) => {
    const filmTitle = filmData.title;
    console.log(filmTitle);

  })
  .catch((err) => {
    console.log('SOMETHING WENT WRONG!')
    console.log(err);
  })