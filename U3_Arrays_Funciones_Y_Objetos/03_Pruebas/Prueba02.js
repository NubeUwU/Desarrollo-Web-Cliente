var a = 0, b = 0;
var doblar = function (a) { return a * 2; };
var sumar = function (a, b) { return a + b; };
var factorial = function (a) {
    if (a <= 1) {
        return 1;
    }
    return a * factorial(a - 1);
};
console.log(doblar(6));
console.log(sumar(65, 432));
console.log(factorial(10));
