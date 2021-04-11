'use strict';

//==============  Adding stylesheet to the existing page  ===========================
const sheet = new CSSStyleSheet();
sheet.repaceSync('* {transition: all 2s}');
document.adoptedStyleSheets = [sheet];



//=================  get unknown number of arguments  ==============================
const getArguments = function () {
  console.log(Array.prototype.slice.call(arguments));
};
getArguments(1, 5, 17, [2, 5], {'key': 'value'});

const getArguments2 = function() {
  console.log(Array.from(arguments));
};
getArguments2(1, 5, 17, [2, 5], {'key': 'value'});


const getArguments3 = function(...args) {    // REST
  console.log(args);
};
getArguments3(1, 5, 17, [2, 5], {'key': 'value'});
