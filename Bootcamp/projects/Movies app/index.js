'use strict';

const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'a2f944ea',
      s: searchTerm,
    }
  });

  if ( response.data.Error ) return []; //handling an error with no data returned

  return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
      <label><b>Search For the Movie</b></label>
      <input class="input" id="search" type="text">
      
      <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results">
        </div>
      </div>
    </div>
`;

const input  = document.querySelector('.input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');


document.addEventListener('click', e => {
  if (!root.contains(e.target)) {
    dropdown.classList.remove('is-active');
  }
});

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  if (!movies.length) {
    dropdown.classList.remove('is-active');
    return;
  }

  resultsWrapper.innerHTML = '';
  dropdown.classList.add('is-active');
  for (const movie of movies) {
    const option = document.createElement('a');
    const imageSRC = movie.Poster === 'N/A' ? '' : movie.Poster;
    option.innerHTML = `
      <img src="${imageSRC}" alt="${movie.Title}"/>
      <h1>${movie.Title} (${movie.Year})</h1>
    `;
    option.className = 'dropdown-item';
    resultsWrapper.append(option);
  }
};

input.addEventListener('input', debounce(onInput, 1000));