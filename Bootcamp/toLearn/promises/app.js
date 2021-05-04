// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       (Math.random() < 0.5) ? resolve() : reject();
//     }, 5000);
//
//   })
// }
// makeDogPromise().then(() => {
//   console.log("YAY! WE GOT A DOG!")
// }).catch(() => {
//   console.log(" :( NO DOG...");
// });


const fakeRequest = url => new Promise((resolve, reject) => {
    setTimeout(() => {
        const pages = {
            '/users': [
                { id: 1, username: 'Bilbo' },
                { id: 5, username: 'Sam' }
            ],
            '/users/1': {
                id: 1,
                username: 'Bilbo',
                upvotes: 360,
                city: 'Lisbon',
                topPostId: 454321,
            },
            '/users/5': {
                id: 1,
                username: 'Sam',
                upvotes: 571,
                city: 'Honolulu',
            },
            '/posts/454321': {
                id: 454321,
                title: 'Ladies and Gentlemen, may I introduce my pet pig, Hamlet'
            },
            '/about': 'This is the about page',
        };
        const data = pages[url];
        if (data) {
            resolve({ status: 200, data });
        } else {
            reject({ status: 404 });
        }
    }, 1000);
});


//what a mess!
/*
fakeRequest('/users').then((res) => {
  const id = res.data[0].id;
  fakeRequest(`/users/${id}`).then((res) => {
    const topPostId = res.data.topPostId;
    fakeRequest(`/posts/${topPostId}`).then((res) => {
      console.log(res.data.title);
    })
  }).catch((err)=> {
    console.log('OH NO! AN ERR AGAIN!', err)
  })
})
  .catch((err) => {
    console.log('OH NO!', err)
  })
*/

fakeRequest('/users')
    .then(res => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`);
    })
    .then(res => {
        console.log(res);
        const topPostId = res.data.topPostId;
        return fakeRequest(`/posts/${topPostId}`);
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('OH NO!', err);
    });
