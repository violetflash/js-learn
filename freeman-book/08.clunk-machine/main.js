function clunk(times) {
    var num = times;
    while (num > 0) {
        display(num,"clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 0) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(counter, output) {
    // console.log(output);
    document.write(counter + ". " + output + "<br>")
    clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
thingamajig(2);
console.log(clunkCounter);
document.write(clunkCounter);