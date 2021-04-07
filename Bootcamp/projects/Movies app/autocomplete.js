'use strict';

const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
  root.innerHTML = `
      <label><b>Search For the Movie</b></label>
      <input class="input" type="text">
      
      <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results">
        </div>
      </div>
    </div>
`;

  const input = root.querySelector('.input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');


  document.addEventListener('click', e => {
    if (!root.contains(e.target)) {
      dropdown.classList.remove('is-active');
    }
  });

  const onInput = async (event) => {
    const items = await fetchData(event.target.value);

    if (!items.length) {
      dropdown.classList.remove('is-active');
      return;
    }

    resultsWrapper.innerHTML = '';
    dropdown.classList.add('is-active');
    for (const item of items) {
      const option = document.createElement('a');

      option.innerHTML = renderOption(item);
      option.className = 'dropdown-item';
      resultsWrapper.append(option);

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active');
        input.value = inputValue(item);
        onOptionSelect(item);
      });
    }
  };

  input.addEventListener('input', debounce(onInput, 1000));
};