let arr = [];
arr[0] = "";
arr[1] = "376769";
arr[2] = "576769";
arr[3] = "476769";
arr[4] = "776769";
arr[5] = "276769";
arr[6] = "976769";
arr[7] = "476769";

// for (const arrElement of arr) {
//   if ( arrElement.charAt(0) === "2" || arrElement.charAt(0) === "4" ) console.log(arrElement);
// }

for (const arrElement of arr) {
  if ( arrElement[0] === "2" || arrElement[0] === "4" ) console.log(arrElement);
}

outer:
for (let i = 2; i < 100; i++) {
  for (let j = 2; j < i; j++) {
    if ( i % j === 0 ) {
      continue outer;
    }
  }
  console.log(`${i} - Делители этого числа: 1 и ${i}`);
}
