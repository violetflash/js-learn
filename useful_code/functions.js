//проверка на число
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};


//обрезание строки
function truncate(str, maxlength) {
  return ( str.length > maxlength ) ? str.slice(0, maxlength - 1) + "..." : str;
}


//Fisher Yates Shuffle
function shuffle(arr) {
  //loop over array backwards
  for ( let i = arr.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap in place (shorthand way of swapping elements using destructuring
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(arr);
  }
}
