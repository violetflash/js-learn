window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = changeImg;
        // images[i].onmouseleave = returnBlur;

    }


}

function changeImg(eventObj) {
    var image = eventObj.target;
    image.src = image.id + ".jpg";
    setTimeout(
        function () {  //использование замыкания со свободной переменной image
            image.src = image.id + "blur.jpg";
        },
        3000);
}

