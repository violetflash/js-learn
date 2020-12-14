window.onload = init;

function init() {
    var map = document.getElementById("map");
    map.onmousemove = getCoords;

}

function getCoords(eventObj) {
    var coordX = eventObj.pageX;
    var coordY = eventObj.pageY;
    console.log(coordX, coordY);
    var field = document.getElementById("text");
    field.innerHTML = "Map coordinates: " + coordX + ", " + coordY;
}

