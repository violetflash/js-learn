'use strict';

const onMovieSelect = async movie => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'a2f944ea',
      i: movie.imdbID,
    }
  });
  console.log(response.data);
  document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};

const movieTemplate = movieDetail => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <image src="${movieDetail.Poster}" class=""/>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">BoxOffice</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};


createAutoComplete(
  {
    root: document.querySelector('.autocomplete'),
    renderOption(movie) {
      const imageSRC = movie.Poster === "N/A" ? '' : movie.Poster;
      return `
      <img src="${imageSRC}"/>
      <h1>${movie.Title} (${movie.Year})</h1>
    `;
    },
    onOptionSelect(movie) {
      onMovieSelect(movie);
    },
    inputValue(movie) {
      return movie.Title;
    },
    async fetchData(searchTerm) {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: 'a2f944ea',
          s: searchTerm,
        }
      });

      if (response.data.Error) return []; //handling an error with no data returned
      return response.data.Search;
    }
  }
);



