/* Напишите функцию на JS. Цель: Убрать все объекты с типом additional, а для basic очки уменьшить в двое.

Cоздать новый массив, оставляя исходные данные неизменными */

const myLesson = [
  {lesson: 1, type: 'basic', points: 2},
  {lesson: 2, type: 'additional', points: 4},
  {lesson: 3, type: 'basic', points: 6},
  {lesson: 4, type: 'additional', points: 3},
  {lesson: 5, type: 'basic', points: 4},
  {lesson: 6, type: 'basic', points: 2},
  {lesson: 7, type: 'additional', points: 2},
  {lesson: 8, type: 'basic', points: 6},
  {lesson: 9, type: 'basic', points: 4},
  {lesson: 10, type: 'basic', points: 6},
  {lesson: 11, type: 'additional', points: 5},
  {lesson: 12, type: 'basic', points: 2},
  {lesson: 13, type: 'additional', points: 2},
  {lesson: 14, type: 'basic', points: 4},
  {lesson: 15, type: 'additional', points: 1},
  {lesson: 16, type: 'additional', points: 7},
];

console.log("=========== ORIGINAL ================")
console.log(myLesson);


console.log("========= CUTTER 1 ========")
function cutter(obj) {
  let outputObj = [];

  for (const item of obj) {
    if ( item.type !== 'additional' ) {
      outputObj.push(Object.assign({}, item));
    }
  }

  for (const item of outputObj) {
    if ( item.type === 'basic' ) item.points /= 2;
  }

  return outputObj;
}
console.log(cutter(myLesson));



console.log('=============== CUTTER 2 ==================')
function cutter2(obj) {
  const outputObj = [];
  obj.forEach((element) => {
    if ( element.type !== 'additional' ) {
      const obj = {...element};
      obj.points /= 2;
      outputObj.push(obj);
    }
  })
  return outputObj;
}
console.log(cutter2(myLesson));


console.log('============== CUTTER 3 ============')
const cutter3 = myLesson.reduce( (obj, element) => {
  if ( element.type !== 'additional' ) {
    const item = {...element};
    console.log(item);
    item.points /= 2;
    obj.push({...item});
  }
  return obj;
}, [])

console.log(cutter3);
