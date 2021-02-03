let expenses = [];

let getExpensesMonth = function(){
  let sum = 0;
  let cost;

  for(let i = 0; i < 2; i++ ){
    expenses[i] = prompt('Enter the required expense item');

    /*
    do {
      sum += +prompt('How much will it cost?');
      console.log(`${sum} - isNumber(${sum}) = ${isNumber(sum)}`);
    } while ( !isNumber(sum) );

     */


    do {
      cost = prompt('How much will it cost?');
      console.log(`${cost} - isNumber(${cost}) = ${isNumber(cost)}`);
    } while(!isNumber(cost));

    sum += +cost;

  }
  console.log(expenses);
  return sum;
};

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};


console.log(getExpensesMonth());