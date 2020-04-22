var suma = function (n1, n2){
    var resultado = n1+n2;
    return resultado;
};

var resta = (n1, n2) => {
    return n1-n2;
};

function div(n1, n2) {
    return n1/n2;
}

function mult(n1, n2) {
    return n1*n2;
}

var sum2 = suma; //aca le paso la funcion

var resultado_de_la_suma = suma(1, 5); // aca le paso el resultado de la funcion s
console.log(resultado_de_la_suma);
console.log(sum2(1,4)+resta(3,1));
