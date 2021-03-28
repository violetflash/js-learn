const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'a2f944ea',
      s: searchTerm,
    }
  });

  if ( response.data.Error ) return [];

  return response.data.Search;
}

const root = document.querySelector('.autocomplete');
root.innerHTML = `
      <label><b>Search For the Movie</b></label>
      <input class="input" id="search" type="text">
      
      <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results">
          <a class="dropdown-item" href="">Movie #1</a>
          <a class="dropdown-item" href="">Movie #2</a>
          <a class="dropdown-item" href="">Movie #3</a>
        </div>
      </div>
    </div>
`


const input  = document.querySelector('.input');
const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  // movies.then((res) => {
  //   console.log(res);
  // });
  document.querySelector('#target').innerHTML = '';
  for (const movie of movies) {
    const div = document.createElement('div');
    div.innerHTML = `
      <h1>${movie.Title} (${movie.Year})</h1>
      <img src="${movie.Poster}" alt="${movie.Title}"/>
    `

    document.querySelector('#target').append(div);
  }
};

input.addEventListener('input', debounce(onInput, 1000));