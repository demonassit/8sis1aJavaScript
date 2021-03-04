//problema 1

function problema1(){
    //obtener el valor del input

    var p1_intput = document.querySelector('#p1-input').value;

    //dividir el input por espacios, meterlo en un array e invertir dicho array

    var p1_array = p1_input.split(' ').reverse();

    //construir la string final a partir del array invertido

    var p1_res = '';

    //una funcion para recorrer el arreglo invertido

    p1_array.forEach(function(palabra, i){
        //este es un callback, son funciones que se pueden mandar a llamar a
        //partir de otra funcion y te retorna una respuesta
        //si es el principio o el final no agregamos espacio en blanco
        if(i!=0 || i!= p1_array.length) p1_res += ' '; //agrega un espacio entre palabra

        p1_res += palabra; //agreaga la palabra con espacio al arreglo
    });

    //imprimir el resultado
    document.querySelector('#p1-ouput').textContent = p1_res;
}