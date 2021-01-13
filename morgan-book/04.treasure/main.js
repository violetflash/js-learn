let width = 400;
let height = 400;
let clicks = 0;

let map = document.getElementById('map');
let heading = document.getElementById('heading');

function getRandom(num) {
    return Math.floor(Math.random() * num);
}

function getDistance(event, target) {
    let diffX = event.pageX - target.x;
    let diffY = event.pageY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};

let target = {
    x: getRandom(width),
    y: getRandom(height),
}

map.addEventListener('click', function(event) {
    clicks++;
    let distance = getDistance(event, target);
    heading.innerHTML = getDistanceHint(distance);
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});

