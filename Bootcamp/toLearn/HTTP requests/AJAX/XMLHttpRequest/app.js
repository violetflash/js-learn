/*
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "yourFile.txt", true);
oReq.send();
 */

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
  console.log('FIRST REQUEST WORKED!');
  const data = JSON.parse(this.responseText);
  const filmUrl = data.results[0].films[0];
  console.log(filmUrl);
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener('load', function() {
    console.log('FILM REQUEST WORKED!');
    const filmData = JSON.parse(this.responseText);
    console.log(filmData.title);
  });
  filmReq.addEventListener('error', function(e) {
    console.log('ERROR LOADING FILM!', e);
  });
  filmReq.open('GET', filmUrl);
  filmReq.send();
})
firstReq.addEventListener('error', () => {
  console.log('ERROR!');
})
firstReq.open('GET', 'http://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');