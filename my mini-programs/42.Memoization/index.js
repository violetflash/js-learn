//Функция умножающая число на 2
// const multiplyBy2 = (n) => n * 2;

//Эта же функция с мемоизацией, т.е. с кэшированием функции
(() => {
    const cache = {};

    return multiplyBy2 = (n) => {
        if (n in cache) {
            console.log('from cache!');
            return cache[n];
        }

        cache[n] = n * 2;
        console.log('calculated!');
        return cache[n];
    };
})()

console.log(multiplyBy2(5));
console.log(multiplyBy2(5));
