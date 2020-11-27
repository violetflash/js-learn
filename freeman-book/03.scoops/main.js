var scoops = 10;

while (scoops > 0) {
    if (scoops >= 8) {
        document.write("Кушайте! Шариков еще много!<br>")
    } else if (scoops <= 3) {
        document.write("<p style='color: red; font-weight: 700;'>Внимание! Шарики заканчиваются!</p>")
    }
    document.write("Шариков мороженного:" + scoops + " Скушаем всего один!<br>")
    scoops = scoops - 1;

}
document.write("<br>Шариков не осталось...")
