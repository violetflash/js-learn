let rollBtn = document.querySelector('.btn');
rollBtn.addEventListener('click', function(e) {
    let cubeImg = document.querySelector('.cube-image');
    roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1) {
        cubeImg.src = "img/dice-one.svg";
    } else if (roll === 2) {
        cubeImg.src = "img/dice-two.svg";
    } else if (roll === 3) {
        cubeImg.src = "img/dice-three.svg";
    } else if (roll === 4) {
        cubeImg.src = "img/dice-four.svg";
    } else if (roll === 5) {
        cubeImg.src = "img/dice-five.svg";
    } else if (roll === 6) {
        cubeImg.src = "img/dice-six.svg";
    }
});



