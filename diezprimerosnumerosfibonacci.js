function fibonacci(n) {
   if (n <=1) {
    return n;
   }
   else {
    return fibonacci(n-1) + fibonacci (n-2);
   }
function printFibonacciSecuencia(num) {
    for (let i = 0; i < num; i++) {
        console.log(fibonacci(i));
    }
}
printFibonacciSecuencia(10);
}