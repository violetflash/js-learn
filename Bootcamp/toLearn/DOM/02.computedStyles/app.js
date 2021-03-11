const h1 = document.querySelector('.title');
console.log(h1.style.fontSize); //null - doesnt work.

const h1_compStyle = getComputedStyle(h1);
console.log(h1_compStyle);
console.log(h1_compStyle.fontSize); //40px - it works