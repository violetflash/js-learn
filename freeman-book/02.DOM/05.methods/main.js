var str = "one,two,three,four,five";
var list = str.split(",");
console.log(list);
for (var i in list) {
    if (list[i] === "two") {
        console.log("Bingo! This is TWO");
    } else {
        console.log(list[i]);
    }
}
