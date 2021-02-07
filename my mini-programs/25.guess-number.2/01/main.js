'use strict';
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));

}
//! function wrapping
function start() {
    let isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let num = getRandomNumber(100);


//? function main internal
    function newStart() {
        let userNumber = +prompt('guess the number from 0 to 100');
        if (isNumber(userNumber)) {
            if (userNumber === num) {
                alert('congratulations, you guessed it');
            } else if (userNumber > num) {
                if (confirm('Try again it more')) {
                    newStart();
                } else {
                    alert('game over');
                }
            } else if (userNumber < num) {
                if (confirm('Try again it less')) {
                    newStart();
                } else {
                    alert('game over');
                }
            }
        } else {
            confirm('is not a number');
            newStart();
        }

    }
    console.dir(num);
    newStart();
}
start();