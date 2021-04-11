'use strict';

let array = ['еда', 'вода', 'огненная вода'];

const array1 = array.map((word) => word.splice(0, 1, word[0].toUpperCase()));

console.log(array1.join(', '));
