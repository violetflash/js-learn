/*
Дано число n (n > 0). Проверьте, простое оно или составное.
Если число простое - верните из функции строку "Простое число",
если нет - "Составное число". Воспользуйтесь методом перебора делителей числа.
*/

function testCycle(n) {
    let x = "Простое число";
    for (let i = 2; i * i < n; i++) {  // Перебор до квадратного корня
        if (n % i === 0) {
            x = "Составное число";
            break;
        }
    }
    return x;
}

/*
Через решето эратосфена выписать все простые
*/
function checkPrime(n) {
    let sieve = [];
    let primes = [];
    for (let i = 0; i < n + 1; i++) {
        sieve[i] = true;
    }
    sieve[0] = sieve[1] = false;

    for (let i = 2; i < n + 1; i++) {
        if (sieve[i] === true) {
            for (let j = 2 * i; j < n + 1; j++) {
                sieve[j] = false;
            }
        }
    }
    return sieve;
}

