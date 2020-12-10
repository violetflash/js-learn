//Получите номер телефона в виде:
//"123-4567"
// и напишите код, который будет принимать или отвергать его. Чтобы телефон был принят, он должен
// состоять из семи цифр 0–9, разделенных дефисом.

phone = prompt("Введите номер телефона в формате: 123-4567")

function validate(phone) {
    if (phone.length !==8) {
        document.write("Максимум 8 символов!")
        return false;
    }
    if (phone.charAt(3) !== "-") {
        document.write("Неверный формат записи!")
        return false;
    }
    if ((phone.slice(0,3) + phone.slice(4)) > 0) {
        document.write("Телефон введён верно")
    } else {
        document.write("Должный быть только цифры!")
        return false;
    }
}

function validate2(phone) {
    if (phone.length !==8) {
        document.write("Максимум 8 символов!")
        return false;
    }
    if (phone.charAt(3) !== "-") {
        document.write("Неверный формат записи!")
        return false;
    }
    //Проверка на тип NaN
    if (isNaN(phone.slice(0,3) + phone.slice(4))) {
        document.write("Должный быть только цифры!")
        return false;
    } else {
        document.write("Телефон введён верно")
    }
}

// document.write((phone.slice(0,3) + phone.slice(4)));

validate2(phone);

