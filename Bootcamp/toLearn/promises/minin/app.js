console.log('Requesting data...');

//По сути промисы - это обертка над асинхронностью, которая добавляет удобства для написания кода

// setTimeout(() => {
//   console.log('Preparing data...')
//
//   const data = {
//     name: 'John',
//     age: 35,
//   };
//
//   setTimeout(() => {
//     data.modified = true;
//     console.log('Loading data:', data)
//   }, 2000)
// }, 2000);

/*
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...')
    const backendData = {
      name: 'John',
      age: 35,
    };
    resolve(backendData);
  }, 2000)
});

p
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modified = true;
        resolve(data);
      }, 2000)
    });

})
  .then((clientData) => {
    clientData.fromPromise = true;
    return clientData;
})
  .then((data) => {
    console.log('Modified', data);
})
  .catch((err) => console.error('Error: ', err))
  .finally(() => console.log('Finally'))

 */
//===========================================

const sleep = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}
/*
sleep(2000)
.then(() => {
  console.log('After 2 sec');
})

 */

//метод all, который ждет когда выполнятся все промисы
Promise.all([sleep(2000), sleep(5000)])
  .then(() => {
    console.log('All promises resolved');
  })

//выполнится самый быстрый из промисов
Promise.race([sleep(2000), sleep(5000)])
  .then(() => {
    console.log('All promises resolved');
  })
//=================================================
