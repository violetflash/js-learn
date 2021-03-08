//a function that checks if a given sentence contains every letter of the alphabet.

function isPangram(sentence) {
  const alphabet = [];

  for (let i = 97; i <= 122 ; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  for (const alphabetElement of alphabet) {
    if ( !sentence.toLowerCase().includes(alphabetElement) ) return false;
  }

  return true;
}

console.log(isPangram('Sphinx of black quartz, judge my vow'));