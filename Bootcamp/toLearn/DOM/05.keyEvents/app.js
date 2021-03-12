let txt = document.querySelector('.txt');

txt.addEventListener('keypress', function(e) {
  if ( e.key === 'Enter' ) {
    if ( !this.value ) return;
    const li = document.createElement('li');
    li.innerText = this.value;
    li.style.cursor = 'pointer';
    this.value = "";
    const list = document.querySelector('.list');
    list.appendChild(li);
    li.addEventListener('click', function(e) {
      this.classList.toggle('done');
    });
    li.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      this.remove();
    });
  }
});



