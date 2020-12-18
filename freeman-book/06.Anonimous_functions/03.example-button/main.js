//Подсчет кол-ва кликов по кнопке



/*
//Вариант без замыкания. Плох наличием глобальной переменной.
var count = 0;

window.onload = function() {
    let btn = document.getElementById('clickme');
    btn.onclick = handleClick;
};

function handleClick() {
    let msg = document.getElementById('message');
    count++;
    msg.innerHTML = "You clicked me " + count + " times!";
}
*/


//Вариант с замыканием
window.onload = function () {
    let btn = document.getElementById('clickme');
    let msg = document.getElementById('message');
    var count = 0;
    msg.innerHTML = "You clicked me " + count + " times!";
    btn.onclick = function () {   //функциональное выражение
        count++;
        msg.innerHTML = "You clicked me " + count + " times!";
    };
};