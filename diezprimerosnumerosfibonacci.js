var numero = Number(prompt("Mete un número entre 1 e 10"));
if((numero >= 1) && (numero <= 10)) {
    var x = 0;
    var y = 1;
    var z;
    //Imprime o primeiro numero que será un 0 que non se pode meter
    document.write(x + "<br>");
//Bucle para imprimir o resto de números -1 que xa está impreso
    for (i = 0; i < (numero-1); i ++) {
        z = x + y;
        document.write(z + "<br>");
        y = x;
        x = z;
    }
}
    else {
        alert("Número erróneo");
    }
    
