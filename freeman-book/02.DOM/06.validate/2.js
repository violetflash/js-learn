//Получите номер телефона в виде:
//"123-4567"
// и напишите код, который будет принимать или отвергать его. Чтобы телефон был принят, он должен
// состоять из семи цифр 0–9, которые МОГУТ разделяться дефисом.

phone = prompt("Введите номер телефона в формате: 123-4567")

function validate(phone) {
    var hyphen = 0;

    for (let i = 0; i < phone.length; i++) {
        if (phone.charAt(i) === "-") {
            hyphen++;
            phone = phone.slice(0, i) + phone.slice(i + 1);

            if (isNaN(phone[i])) {
                document.write("Должный быть только цифры!")
                return false;
            }
        }
    }

    if (phone.length !== 10) {
        document.write("Должно быть 10 цифр!")
        return false;
    }
    document.write("Телефон введён верно!")
}

validate(phone);

var hyphen = 0;

// for (let i = 0; i < phone.length; i++) {
//     if (phone.charAt(i) === "-") {
//         hyphen++;
//         phone = phone.slice(0, i) + phone.slice(i + 1);
//     }
// }
//
// document.write(phone.length + hyphen);
