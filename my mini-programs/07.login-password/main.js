function login() {
    let user = prompt("Введите ваш логин:");
    if (user === null) {
        alert("Отменено")
    } else if (user === "Админ" || user === "админ") {
        let password = prompt("Пароль:")
        checkAdminPassword(password);
    } else {
        alert("Я вас не знаю.");
    }
}

function checkAdminPassword(password) {
    if (password === null) {
        alert("Отменено");
    } else if (password === "я главный" || password === "Я главный") {
        alert("Вход подтверждён! Здравствуйте!");
    } else {
        alert("Неверный пароль!");
    }
}

login();