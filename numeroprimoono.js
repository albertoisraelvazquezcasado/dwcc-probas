function esPrimo(num) {
    //Si el numero es 1 o menor, no es numero primo
    if (num <=1) {
        return false;
    }
    // Averiguar si número es divisible entre 2 y la raiz cuadrada del numero
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    // Si el número no se puede dividir entre 2 y la raíz cuadrada, no primo
        return true;
}
//Vamos a visualizar el resultado por pantalla
    alert("El número 5 es primo: "+esPrimo(5)); //true
    alert("EL número 10 es primo: "+esPrimo(10));//false
}