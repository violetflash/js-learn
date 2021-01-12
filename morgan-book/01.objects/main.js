let stats = {
    alex: {
        name: "Alex",
        score: 10
    },
    sam: {
        name: "Sam",
        score: 5
    },
    addscore: function (name, amount) {
        name.score += amount;
    }
}

stats.alex.score += 10;

console.log(stats);
stats.addscore("alex", 15);
console.log(stats);

