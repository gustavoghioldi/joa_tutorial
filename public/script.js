var mensaje = "Hola esto es un mensaje para: "; //string
var nombre = "Gustavo"
var num1 = 10; //numerico
var num2 = 20;//numerico

var resultado = 10+20;
//aca muestro un mensaje en consola
console.log(mensaje);
console.log(mensaje+nombre); // contatenacion
console.log(resultado);

if (num1>=18) {
    console.log("este usuario puede ingresar num1 por que es igual a "+num1);
} else {
    console.log("no puede ingresar por que es menor "+num1)
}

if (num2>=18) {
    console.log("este usuario puede ingresar num2 por que es igual a "+num2);
}

var usuario = "root";
var password = "1234"
// == ; != ; < ; > ; <= ; >=; signos para evaluar (retornan true or false)
// && y ; || o ; 
if (usuario == "root" && password=="123") {
    console.log("usuario permitido");
} else {
    console.log("ingreso no permitido");
}


