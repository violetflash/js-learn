function invalidReport(obj) {
  obj.closest('.label').classList.remove('valid');
  obj.closest('.label').classList.add('invalid');
}

function validReport(obj) {
  obj.closest('.label').classList.remove('invalid');
  obj.closest('.label').classList.add('valid');
}


const input = document.querySelector('.input');

input.addEventListener('blur', function(e) {
  const result = (/^[a-z][a-z-_.]+@[a-z-_]+\.[a-z]{2,4}$/gi).test(this.value.trim());
  console.log(result);
  if ( !result ) {
    invalidReport(this);
  } else {
    validReport(this);
  }
  this.value = this.value.trim();
});



const input2 = document.querySelector('.input2');

input2.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^a-z0-9@_.!\\-]|^[\d\W]/g, '');
});

input2.addEventListener('blur', function(e) {
  const result = (/^[a-z][a-z0-9-_.]+@[a-z0-9-_]+\.[a-z]{2,4}$/gi).test(this.value);
  console.log(result)
  if ( result ) {
    validReport(this);
  } else {
    this.setCustomValidity('неверный ввод, попробуйте один из следующих форматов ввода: sobaka@gmail.com или sobaka@mail.ru');
    this.reportValidity();
    invalidReport(this);
  }
});
