function GenerarFibonnaci(numero) {
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < numero; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i-1];

}
    return fibonacci;
}
var f = GenerarFibonacci(10);
console.log(f);
