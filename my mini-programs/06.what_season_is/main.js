let input = document.querySelector('.season');
let btn = document.querySelector('.btn');
let image = document.getElementById('image');
let text = document.querySelector('.text');
console.log(image);

btn.addEventListener('click', function(e) {
    let month =  input.value;
    if (month === "Январь" || month === "Февраль" || month === "Декабрь") {
        image.setAttribute("src", "img/winter.jpg");
        text.innerHTML = "зима";
    } else if (month === "Март" || month === "Апрель" || month === "Май"){
        image.setAttribute("src", "img/spring.jpg");
        text.innerHTML = "весна";
    } else if (month === "Июнь" || month === "Июль" || month === "Август") {
        image.setAttribute("src", "img/summer.jpg");
        text.innerHTML = "лето";
    } else if (month === "Сентябрь" || month === "Октябрь" || month === "Ноябрь") {
        image.setAttribute("src", "img/autumn.jpg");
        text.innerHTML = "осень";
    } else {
        image.setAttribute("src", "img/seasons.jpg");
        text.innerHTML = "";
    }
});