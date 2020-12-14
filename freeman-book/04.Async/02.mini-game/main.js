window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for (let i = 0; i < image.length; i++) {
        images[i].onclick = changeImg;
    }

}

function changeImg() {
    var images = document.getElementsByTagName("img");
    images.src = "zero.jpg"
}