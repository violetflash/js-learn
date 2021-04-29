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

/*
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "yourFile.txt", true);
oReq.send();
 */

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
    console.log('FIRST REQUEST WORKED!');
    const data = JSON.parse(this.responseText);
    console.log(data);
});
firstReq.addEventListener('error', () => {
    console.log('ERROR!');
});
firstReq.open('GET', 'base.json', true);
firstReq.send();
console.log('Request Sent!');
