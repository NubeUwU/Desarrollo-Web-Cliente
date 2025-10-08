let a = 0, b = 0;
const doblar = a => a * 2;
const sumar = (a, b) => a + b;
const factorial = a => {
    if (a <= 1) {
        return 1;
    }
    return a * factorial(a - 1);
};
console.log(doblar(6));
console.log(sumar(65, 432));
console.log(factorial(10));
