function a() {
    return 'результат';
}

b = a;
c = a();
console.log(b);
console.log(c);
console.log(b());
console.log(c());
