let input = document.querySelector('.season');
let btn = document.querySelector('.btn');
let image = document.getElementById('image');
console.log(image);
let seasons = ["Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь"];

btn.addEventListener('click', function(e) {
    console.log(input.value);
    if ((seasons.indexOf(input.value) < 3)) {
        image.setAttribute("src", "winter.jpg");
    } else if (input.value === ("Март" || "Апрель" || "Май")){
        image.setAttribute("src", "spring.jpg");
    } else if (input.value === ("Июнь" || "Июль" || "Август")) {
        image.setAttribute("src", "summer.jpg");
    } else if (input.value === ("Сентябрь" || "Октябрь" || "Ноябрь")) {
        image.setAttribute("src", "autumn.jpg");
    } else {
        image.setAttribute("src", "seasons.jpg");
    }
});