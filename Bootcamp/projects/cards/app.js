'use strict';

/*
Задания на КОНКУРС ЛУЧШИХ РАБОТ
1) Загрузить JSON файл
2) При помощи ajax запросов к загруженному файлу сформировать на странице карточки
Героев со всеми данными (фото, имя, настоящее имя,  список фильмов, статус).
1 персонаж - 1 карточка.
3) Реализовать переключатели-фильтры по фильмам.
    Выпадающее меню или список, на ваше усмотрение
Показывать только те карточки, которые подходят под выбранный фильтр.
    Стилизация карточек и всего внешнего вида - на ваше усмотрение.
    Упор сделать на главную цель - донесение информации, никаких вырвиглазных цветов и шрифтов.
4) Добавить ссылку на выполненное задание
Оцениваться будет в основном чистота кода и правильность реализации.
    В случае идеального кода у претендентов - будем смотреть на стили.
*/

function animate({ timing, draw, duration }) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
            timeFraction = 1;
        }
        // вычисление текущего состояния анимации
        const progress = timing(timeFraction);
        draw(progress); // отрисовать её
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

const headerImg = document.querySelector('.header__img');

const headerImgArrival = () => {
    // animate({
    //     duration: 2500,
    //     timing(timeFraction) {
    //         return 1 - Math.sin(Math.acos(timeFraction));
    //     },
    //     draw(progress) {
    //         console.log(progress);
    //         // console.log(headerImg.offsetTop);
    //         // console.log(headerImg.offsetHeight);
    //         if (headerImg.offsetTop < 0) {
    //             headerImg.style.top = -headerImg.offsetHeight + progress * 1000 + 'px';
    //         }
    //     }
    // });
    let counter = 0;

    const moveImg = () => {
        if (headerImg.offsetTop < 0) {
            headerImg.style.top = counter + 'px';
            console.log(headerImg.offsetTop);
        } else {
            clearInterval(headerInterval);
        }
        counter += 10;
    };
    const headerInterval = setInterval(moveImg, 100);
    headerImg.style.position = 'block';
};

document.addEventListener('DOMContentLoaded', () => {
    headerImgArrival();
});



const request = new XMLHttpRequest();
request.open('GET', './base.json');
request.setRequestHeader('Content-type', 'application/json');
// request.overrideMimeType("application/json");

request.addEventListener('load', function() {
    console.log('FIRST REQUEST WORKED!');
    const data = JSON.parse(this.responseText);
    for (const hero of data) {
        console.log(hero.name);
    }
    console.log(data);
});

request.addEventListener('error', () => {
    console.log('ERROR!');
});

request.send();
console.log('Request Sent!');


const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
    root.innerHTML = `
      <label><b>Select the Movie</b></label>
      <input class="input" type="text">
      
      <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results">
        </div>
      </div>
    </div>
    `;
};