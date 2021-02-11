/*
vamos a crear una funcion que se encargue de validar la entrada
de los datos a partir de un evento de teclado
*/

function validarn(e) {

    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    //patron de la prueba logica, en pocas palabras la expresion regular
    var patron = /[0-9]\d ./;

    var tec = String.fromCharCode(teclado);

    return patron.test(tec);
    
}

/*
funcion que se encargue del calculo de los intereses de las ventas por comision
*/ 


function interes(){

    var valor = document.formulario.sueldo.value;
    //tenemos que parsearlo pq lo obtenemos como cadena
    var sueldo = parseInt(valor);

    var v1s = document.formulario.v1.value;
    var v2s = document.formulario.v2.value;
    var v3s = document.formulario.v3.value;

    var v1 = parseInt(v1s);
    var v2 = parseInt(v2s);
    var v3 = parseInt(v3s);

    //calculamos el interes

    var interes = (v1+v2+v3)*0.1;

    var total = sueldo+interes;

    //imprimos el valor en valor en el campo de texto

    document.formulario.sueldoti.value = "$"+total;
}

//funcion de borrar

function borrar() {

    document.formulario.sueldo.value="";
    document.formulario.v1.value="";
    document.formulario.v2.value="";
    document.formulario.v3.value="";
    document.formulario.sueldoti.value="";
    
}