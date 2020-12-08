function bark(name, age) {
    if (age >= 20) {
        barkling = "WOOF WOOF";
        dogInfo(name, age);

    } else {
        barkling = "woof woof";
        dogInfo(name, age);
    }
}

function dogInfo(name, age) {
    document.write("Dog: " + name + "<br>");
    document.write("Age: " + age + "<br>");
    document.write("Barkling: " + barkling + "<br>");
}

name = prompt("Dog's name:");
age = prompt("Dog's age:");
bark(name, age);
bark("juno", "20", 0);