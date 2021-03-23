// const moveX = (amount, elem = btn, delay = 1000) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth;
//       const btn = elem.getBoundingClientRect();
//       const elemX = btn.left + btn.width;
//       if ((elemX + amount) > bodyBoundary) {
//         reject({bodyBoundary, amount, elemX});
//       } else {
//         elem.style.transform = `translateX(${btn.left + amount}px)`;
//         resolve({status: 'success', action: 'move'});
//       }
//     }, delay)
//   })
// }

/*
//SEQUENTIAL REQUEST - data loading one after another. But in this func there is no reason for this, cause of independent data from each other
async function get3Pokemon() {
  const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1'); // waiting for the resolve value
  const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
  let arr = [poke1, poke2, poke3];
  arr.forEach((item) => {
    console.log(item.data.name)
  })
}
 */

async function get3Pokemon() {
  //  Parallel sending requests, independently
  const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');  // it's a promise
  const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  // Only now waiting for the responses
  const results = await Promise.all([promise1, promise2, promise3]);
  // const poke1 = await promise1; // waiting for the resolve value
  // const poke2 = await promise2;
  // const poke3 = await promise3;
  results.forEach((item) => {
    console.log(item.data.name)
  })
}

get3Pokemon();

//The difference
function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

//sequential
// async function lightShow() {
//   await changeBodyColor('teal', 1000);
//   await changeBodyColor('pink', 1000);
//   await changeBodyColor('yellow', 1000);
//   await changeBodyColor('orange', 1000);
// }

//parallel
async function lightShow() {
  const p1 = changeBodyColor('teal', 1000);
  const p2 = changeBodyColor('pink', 1000);
  const p3 = changeBodyColor('yellow', 1000);
  const p4 = changeBodyColor('orange', 1000);
  await p1;
  await p2;
  await p3;
  await p4;
}

lightShow();


