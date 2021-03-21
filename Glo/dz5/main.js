/* eslint-disable eol-last */
/* eslint-disable prefer-const */

const country = document.getElementById('country');
let city = document.getElementById('city');
let result = document.querySelector('.result');

const cityArr = {
  rus: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
};

country.addEventListener('change', () => {
  city.innerHTML = '';
  if (country.value === 'rus') {
    cityArr.rus.forEach(item => {
      city.options[city.selectedIndex];
      let newOption = new Option(`${item}`, 'rus');
      newOption.className = 'city-option';
      city.append(newOption);
    });
    city.addEventListener('change', () => {
      result.textContent = `Россия: ` + city.value;
    });
  } else if (country.value === 'uk') {
    cityArr.uk.forEach(item => {
      city.options[city.selectedIndex];
      let newOption = new Option(`${item}`);
      city.append(newOption);
    });
    city.addEventListener('change', () => {
      result.textContent = `Украина: ` + city.value;
    });
  } else if (country.value === 'bel') {
    cityArr.bel.forEach(item => {
      city.options[city.selectedIndex];
      let newOption = new Option(`${item}`);
      city.append(newOption);
    });
    city.addEventListener('change', () => {
      result.textContent = `Белоруссия: ` + city.value;
    });
  } else if (country.value === 'jap') {
    cityArr.jap.forEach(item => {
      city.options[city.selectedIndex];
      let newOption = new Option(`${item}`);
      city.append(newOption);
    });
    city.addEventListener('change', () => {
      result.textContent = `Япония: ` + city.value;
    });
  }
});