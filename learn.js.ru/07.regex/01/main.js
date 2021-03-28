

let str = "Любо, братцы, любо!";

let result = str.match(/любо/i); // без флага g

alert( result[0] );     // Любо (первое совпадение)
alert( result.length ); // 1

// Дополнительная информация:
alert( result.index );  // 0 (позиция совпадения)
alert( result.input );  // Любо, братцы, любо! (исходная строка)