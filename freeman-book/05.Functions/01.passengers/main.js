var passengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evil", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true }
    ];

var blacklist = ["Dr. Evil", "Sue Property"];

blacklistFind = function(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        document.write(passengers[i].name + "<br>");
        if (blacklist.indexOf(passengers[i].name) > 0) {
            document.write(passengers[i] + " is blacklisted!")
        }
    }
}

blacklistFind(passengers);