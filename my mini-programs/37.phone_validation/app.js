/*
1) разрешить ввод только цифр, -, (), +
2) для прохождения валидности потребуется любой формат номера РФ а это:
8XXXXXXXXXX или +7XXXXXXXXXX или 8(XXX)XXXXXXX или 8-XXX-XXX-XX-XX или +7(XXX)XXX-XX-XX или 8(XXX)XXX-XX-XX или +7XXX-XXX-XX-XX
3) написать 1 маску +7(ххх)ххх-хх-хх
4) после блюра если пройдена валидность номер преобразуется по маске из пункта 3
5) если пользователь не попадает ни под один формат уведомить его об этом, но не удалять номер

Усложненное:
1) Вводить + можно только один раз
2) - два раза подряд нельзя вводить но можно чередовать после цифр 999-999- можно  999—999 нет
если ты напишешь код где у пользователя не будет шансов ошибиться, плюс, тире и скобки сами будут подставляться в нужный момент то задание будет принято аналогично.

например я ввожу 8 он сделает сразу +7 далее я пишу 963, преобразуются в (963)
 3265671 тире само подставиться в нужные места 326-56-71
в результате получаем +7(963)326-56-71
то-есть пользователь не может сделать ошибку
 */

function invalidReport(obj) {
  obj.closest('.label').classList.remove('valid');
  obj.closest('.label').classList.add('invalid');
}

function validReport(obj) {
  obj.closest('.label').classList.remove('invalid');
  obj.closest('.label').classList.add('valid');
}


const input = document.querySelector('.input');

input.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^0-9()-]/g, '');
});

// input.addEventListener('blur', function(e) {
//   let name = this.value.trim();
//   if ( (/^.$/gi).test(name) ) {
//     this.value = '';
//   } else if ( (/^[а-я].+/g).test(name) ) {
//     name = name.replace(/./g, letter => letter.toLowerCase())
//     name = name.replace((/^[a-я]|[\s|-]./g), letter => letter.toUpperCase())
//     this.value = name;
//   }
// });
