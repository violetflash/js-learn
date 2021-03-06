// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
  document.querySelector('.out-1').textContent = e.key;
  return e.key;
}

// ваше событие здесь!!!
document.querySelector('.i-1').addEventListener('keydown', t1);

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
  console.log(e)
  document.querySelector('.out-2').textContent = e.code;
  return e.code;
}

// ваше событие здесь!!!
document.querySelector('.i-2').addEventListener('keydown', t2);


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра.
Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
  console.log(e.code['length']);
  document.querySelector('.out-3').textContent = (e.code['length'] === 4)
  // document.querySelector('.out-3').textContent = isNaN(e.key);
}

// ваше событие здесь!!!
document.querySelector('.i-3').addEventListener('keydown', t3);


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
  document.querySelector('.out-4').textContent = document.querySelector('.i-4').value.toLowerCase();
}

// ваше событие здесь!!!
document.querySelector('.i-4').addEventListener('input', t4);

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
  document.querySelector('.out-5').textContent = document.querySelector('.i-5').value.toUpperCase();
}

// ваше событие здесь!!!
document.querySelector('.i-5').addEventListener('input', t5);

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let out = '';

function t6(event) {
  console.log(event.keyCode);
  if (event.keyCode >= 97) {
    out += event.key;
  }
  document.querySelector('.i-6').value = out;
  return false;

}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
let str = '';

function t7() {
  const a7 = ['a', 'b', 'c', 'd', 'e', 'f'];
  str += a7[Math.floor(Math.random() * a7.length)];
  document.querySelector('.out-7').textContent = str;
}

// ваше событие здесь!!!
document.querySelector('.i-7').addEventListener('input', t7);

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
  let out = (
    e.key === 'i' ? 1 :
      e.key === 'o' ? 0 :
        e.key === 'l' ? 7 :
          e.key
  );
  document.querySelector('.out-8').textContent += out;
}

// ваше событие здесь!!!
document.querySelector('.i-8').addEventListener('keydown', t8);

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let counter = 0;

function t9(e) {
  console.log(e.key);
  if ( e.key === 'ArrowDown' ) {
    counter++;
    document.querySelector('.out-9').textContent = counter;
  }
}

// ваше событие здесь!!!
document.querySelector('.i-9').addEventListener('keydown', t9);


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input,
при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения.
Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let block = document.querySelector('.div-10');
    width = block.getElementsByTagName('img')[0].offsetWidth;
    height = block.getElementsByTagName('img')[0].offsetHeight;

function t10(e) {
  if ( e.key === 'ArrowLeft' || e.key === 'ArrowRight' ) width++;
  if ( e.key === 'ArrowUp' || e.key === 'ArrowDown' ) height++;
  console.log(`width: ${width}, height: ${height}`);

  block.getElementsByTagName('img')[0].style.width = `${width}px`;
  block.getElementsByTagName('img')[0].style.height = `${height}px`;

}

// ваше событие здесь!!!
document.querySelector('.i-10').addEventListener('keydown', t10);


// Task 11 ============================================
/*  Проект.
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p.
Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору).
Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом.
Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются.
Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(e) {
  console.log(e.code);
  let keys = document.querySelectorAll('.key');
  let specials = document.querySelectorAll('.special');

  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.remove('active');
    if ( e.key === keys[i].value ) keys[i].classList.add('active');
  }

  for (let i = 0; i < specials.length; i++) {
    specials[i].classList.remove('active');
    if ( e.code === specials[i].value ) specials[i].classList.add('active');
  }
}

// ваше событие здесь!!!
document.querySelector('.i-11').addEventListener('keydown', t11);
