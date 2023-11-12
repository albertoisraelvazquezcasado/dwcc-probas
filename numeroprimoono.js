var n1,primo;
n1=parseInt(prompt("Inserta un numero")); //Para preguntar que numero se quiere introducir.
i=2; // Casi todos los primos terminan en 2 por eso el valor de la variable es 2.
primo=true; // Si es primo.

do{
    if(n1%i==0){
        primo=false;
    }
    i++;
}while(i<n1);

if(primo===true) {
    document.write("El numero "+n1+" es primo");
    }
else {
    document.write("El numero "+n1+" no es primo");
}
