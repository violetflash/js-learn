"use strict"

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let appData = {
    expenses: {},
    asking: function() {
        for (let i = 0; i < 2; i++) {
            let key = prompt('Enter the required expense item');
            let cost;

            do {
                cost = prompt('How much will it cost?');
            } while (!isNumber(cost));

            appData.expenses[key] = cost;
        }
    }
}

appData.asking();
console.log(appData.expenses);