let btn = document.createElement('button');
btn.innerText = 'MoveMe';
btn.style.padding = '10px 15px';
document.body.append(btn);


const moveX = (amount, elem = btn, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const btn = elem.getBoundingClientRect();
      const elemX = btn.left + btn.width;
      if ((elemX + amount) > bodyBoundary) {
        reject({bodyBoundary, amount, elemX});
      } else {
        elem.style.transform = `translateX(${btn.left + amount}px)`;
        resolve({status: 'success', action: 'move'});
      }
    }, delay)
  })
}


async function animateRight(amount, el) {
  await moveX(amount, el);
  await moveX(amount, el)
  await moveX(amount, el)
  await moveX(amount, el)
  await moveX(amount, el)
  await moveX(amount, el)
  await moveX(amount, el)
}

animateRight(100, btn).catch((err) => {
  console.log('AL DONE!')
  animateRight(-100, btn);
})

// moveX(100)
//   .then(()=> moveX(100))
//   .then(()=> moveX(100))
//   .then(()=> moveX(100))
//   .then(()=> moveX(1500))
//   .catch(({bodyBoundary, elemX, amount})=> {
//     console.log(`Your browser body is ${bodyBoundary}px wide`);
//     console.log(`You tried to move button for ${amount}px, but the free space is only ${parseInt(bodyBoundary - elemX)}px`);
//
//   })



