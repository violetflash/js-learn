limit = prompt("Введите до какого числа вывести все нечетные числа:", "20");

for (let i = 0; i < limit; i++) {

    if (i % 2 === 0) continue; //отправляет цикл на следующую итерацию

    document.write(i + "<br>");
}