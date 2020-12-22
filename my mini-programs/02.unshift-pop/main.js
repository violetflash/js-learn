function reverse(array) {
    var list = [];
    len = array.length;
    for (let i = 0; i < len; i++) {
        list.push(array.pop()); //извлекаем последний элемент исходного массива и добавляем его в начало нового
    }
    return document.write(list);
}

reverse([4, "s", "d", "a", 4, "b", "a"]);

document.write("<br>====================<br>");

function reverse2(array) {
    return document.write(array.reverse());
}

reverse2([4, "s", "d", "a", 4, "b", "a"]);
