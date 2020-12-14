function pageLoadedHandler() {
    alert("I am alive!");
}

msg = alert("Woa!!")


//этот обработчик события называют функция обратного вызова
window.onload = pageLoadedHandler;
// window.onload = msg;