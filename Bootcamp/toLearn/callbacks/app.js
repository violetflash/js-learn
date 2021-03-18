let btn = document.createElement('button');
btn.innerText = 'MoveMe';
btn.style.padding = '10px 15px';
document.body.append(btn);

// setTimeout(() => {
//   btn.style.transform = 'translateX(100px)';
//   setTimeout(() => {
//     btn.style.transform = 'translateX(200px)';
//     setTimeout(() => {
//       btn.style.transform = 'translateX(300px)';
//       setTimeout(() => {
//         btn.style.transform = 'translateX(400px)';
//         setTimeout(() => {
//           btn.style.transform = 'translateX(500px)';
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (amount, callback, elem=btn, delay=1000) => {
  const btnObj = elem.getBoundingClientRect();
  const x = document.body.clientWidth;
  if ( (btnObj.left + btnObj.width + amount) > x ) {
    console.log(`I can't`);
  }
  else {
    setTimeout( () => {
      elem.style.transform = `translateX(${amount}px)`;
      if( callback ) callback();
    }, delay)
  }


}

moveX( 100, () => {
  moveX(200, () => {
    moveX(300, () => {
      moveX(400, () => {
        moveX(1500);
      })
    })
  })
});

