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


moveX(100)
  .then((res)=> {
    console.log(res.status);
    console.log(res.action);
    return moveX(100)
})
  .then((res)=> {
    console.log(res.status);
    console.log(res.action);
    return moveX(100)
  })
  .then((res)=> {
    console.log(res.status);
    console.log(res.action);
    return moveX(100)
  })
  .then((res)=> {
    console.log(res.status);
    console.log(res.action);
    return moveX(1500)
  })
  .catch(({bodyBoundary, elemX, amount})=> {
    console.log(`Your browser body is ${bodyBoundary}px wide`);
    console.log(`You tried to move button for ${amount}px, but the free space is only ${parseInt(bodyBoundary - elemX)}px`);

  })

/*
//CALLBACK HELL - Lots of nesting, lots of functions that are nested and passed as callbacks
moveX(100, () => {
  moveX(100, () => {
    moveX(100, () => {
      moveX(100, () => {
        moveX(1500, () => {
          console.log('REALLY? WE STILL HAVE SCREEN LEFT???')
        }, () => {
          alert("CAN'T MOVE ANYMORE!");
        })
      }, () => {
        alert("CAN'T MOVE ANYMORE!");
      })
    }, () => {
      alert("CAN'T MOVE ANYMORE!");
    })
  }, () => {
    alert("CAN'T MOVE ANYMORE!");
  })
}, () => {
  alert("CAN'T MOVE ANYMORE!");
});
 */

