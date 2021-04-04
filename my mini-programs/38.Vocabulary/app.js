'use strict';

// const translate = async (word) => {
//   const response = await axios.get('translate.google.com/translate_a/t?client=x', {
//     params: {
//       text: word,
//       sl: 'en',
//       tl: 'ru',
//     }
//   });
//
//   console.log(response);
// };
//
// translate('clunky');


fetch("https://lyglo.p.rapidapi.com/translate", {
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-rapidapi-key": "c5626387a4mshe9b24e2f8f36addp1b5c4cjsn358866a9ef19",
    "x-rapidapi-host": "lyglo.p.rapidapi.com"
  },
  "body": {
    "sourceLanguage": "en",
    "targetLanguage": "es",
    "text": "Man is least himself when he talks in his own person. Give him a mask, and he will tell the truth. "
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });