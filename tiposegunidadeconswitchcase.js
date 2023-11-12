let edad;
edad = parseInt(prompt("Indica cual es tu edad"));
switch (true){
    case (edad < 12):
        msg = "neno";
        break;
    case (edad > 12 && edad <= 18):
        msg = "adolescente";
        break;
    case (edad > 18 && edad <= 30):
        msg = "xoven";
        break;
    case (edad > 30 && edad <= 64):
        msg = "adulto";
         break;
    case (edad > 64 && edad <= 100):
        msg = "xubilado";
        break;
    default:
        msg = "Idade incorrecta";
}
alert ("Tu eres "+msg)
