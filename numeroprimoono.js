const esPrimo = numero => {
    if 
    (numero == 0 || numero == 1 || numero == 4)
    return false;
    for (
        let x = 2; x < numero / 2; x++){
            if (numero % x == 0) return false;
        }
        return true;
}

const numerosParaComprobar = [1,2,6,9,12,15];

numerosParaComprobar.forEach(numero => {
    console.log("¿%d es primo?%s", numero, esPrimo(numero));
}
    )