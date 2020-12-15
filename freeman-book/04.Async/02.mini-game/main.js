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
    var blured = image.src;
    console.log(blured);
    image.src = image.id + ".jpg";
    // eventObj.timeStamp = 0;
    // console.log(eventObj.timeStamp)
    // if (eventObj.timeStamp > 5000) {
    //     image.src = blured;
    // }
    setTimeout(returnBlur, 3000, image);
}

function returnBlur(image) {
    // var image = eventObj.target;
    image.src = image.id + "blur.jpg";
}
