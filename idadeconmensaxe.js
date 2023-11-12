do{
var edad = prompt("Inserte la edad");// pide a idade e a gardana variable edad.
//introducese o número
if (Number(edad) == edad) {
    // Si a idade é entre 0 e 100 comproba todo o rango e amosa a mensaxe.
if (edad > 0 && edad <=100) {
    if (edad < 3) {
        alert("neno");
    }
    else if (edad < 18) {
        alert("adolescente");
    } else if(edad < 30) {
        alert("xoven");
    } else if (edad < 64) {
        alert("adulto");
    } else if (edad < 100) {
        alert("xubilado");
    }
}
// se a idade non é entre 0 e 100
else {
    alert("Idade erronea");
}
}
// se a idade non é número
else {
    if (edad != undefined) {
        alert("Inserte un numero valido");
    }
    }
}
while (edad != undefined);

