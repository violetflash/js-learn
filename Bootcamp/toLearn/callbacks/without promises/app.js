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

const moveX = (amount, onSuccess, onFailure, elem = btn, delay = 1000) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const btn = elem.getBoundingClientRect();
    const elemX = btn.left + btn.width;
    if ((elemX + amount) > bodyBoundary) {
      onFailure();
    } else {
      elem.style.transform = `translateX(${btn.left + amount}px)`;
      onSuccess();
    }
  }, delay)
}

onFailure = () => {
  alert("CAN'T MOVE ANYMORE!");
}

//
// moveX(100,() => {
//   moveX(100,() => {
//     moveX(100,() => {
//       moveX(100,() => {
//         moveX(1500);
//       })
//     })
//   })
// });


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

