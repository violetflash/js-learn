/*
ТЗ 2 для имени
На событие инпут разрешить ввод только букв, должна быть только кириллица, пробел и тире
(имена бывают просто из 2 слов  и с тире)
на тот же елемент повесить событие блюр и в нём сделать:
1) если введена только 1 буква очищаем поле
2) каждая первая буква должна стать заглавное если пользователь ввёл всё с маленькой букввы
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
  this.value = this.value.replace(/[^а-яА-Я -]/g, '');
});

input.addEventListener('blur', function(e) {
  let name = this.value.trim();
  if ( (/^.$/gi).test(name) ) {
    this.value = '';
  } else if ( (/^[а-я].+/g).test(name) ) {
    name = name.replace(/./g, letter => letter.toLowerCase())
    name = name.replace((/^[a-я]|[\s|-]./g), letter => letter.toUpperCase())
    this.value = name;
  }
});
