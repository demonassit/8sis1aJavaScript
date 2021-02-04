
/*
JavaScript es un lenguaje que maneja diferentes paradigmas de programacion, 
entre ellos tenemos:

POO
Progrmacion Funcional
Programacion Orientada a Eventos
Programacion Orientada a (Componentes)

POO

Se maneja el DOM (document en html o el documento de html ) nos va a servir para 
poder manipular toda la interfaz de la pagina web, cambiando su comportamiento, estilos,
eventos, funciones, etc para la navegacion o la operacion del usuario

PF

Se maneja el DOM para la creacion de funciones especificas a traves de 
promesas, callback, rollback, (las funciones son metodos de programacion que nos devuelven
    una funcion [callback],  variables, cadenas, booleanos, 
    rollback[funcion dentro de una funcionn recursiva]).

Cada funcion va a realizar solo 1 operacion dentro del DOM, esto facilita la programacion
ya que se empiezan a especializar funciones para poder realizar subtareas mas sencillas

POE (android ionic que es para crear apps para d m)

Se manejan componentes a partir de secuencias o eventos (llamadas desde pantallas tactiles, 
    botones, apis, o cualquier otro tipo de llamda), las cuales nos van a ayudar a distinguir
    el tipo de proceso, respuesta, tiempo de operacion, y otros detalles que se encuentran
    en el navegador o dispositivo que hizo la peticion del evento, se mezcla la POO y PF 
    para la creacion de estructuras logicas complejas que atienden las peticiones y
    respuestas de dichos eventos

POC

Utiliza frameworks para la definicion de la reutilizacion de codigo estandarizado, llamado
componente.

EL componente ya va a tener sus reglas, sus funciones, sus metodos, sus comportamientos
preestablecidos y a la reutilizacion del codigo

*/

//POO

function validar(formulario){

    //function nombre_funcion(argumentos)

    //se puede utilizar toda la POO, sentencias de control, bucles, 
    //condiciones, parametros, palabras reservadas para el manejo de array, listas, etc 

    //valide que el nombre sea mayor a 5 caracteres
    if(formulario.nombre.value.length < 5){

        alert("Escriba por lo menos 5 caracteres en el campo de nombre");
        formulario.nombre.focus();
        //posicionar el puntero donde surgio el error en este caso
        return false;
    }


    /*
    queremos validar que la entrada del campo de texto admita unicamente
    letras ya sea mayusculas o minisculas
    */ 

    var checkOK = "qwertyuiopasdfghjklñzxcvbnm"+"QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkStr = formulario.nombre.value; //obtenemos el valor de nombre

    var allValid = true;  //verificacion booleana para las cadenas

    for (i=0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);

        //otro for para ahora si comparar contra la cadena checkOK
        for(j=0; j < checkOK.length; j++)
            if(ch == checkOK.charAt(j))
            break;

            if(j == checkOK.length){
                allValid = false;
                break;
            }
    }

    if(!allValid){
        alert("Escriba unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }



    /*
    vamos a validar que unicamente en el campo de edad
    se introduzcan valores numericos
    */

   var checkOK = "1234567890";

   var checkStr = formulario.edad.value; //obtenemos el valor de edad

   var allValid = true;  //verificacion booleana para las cadenas

   for (i=0; i < checkStr.length; i++){
       var ch = checkStr.charAt(i);

       //otro for para ahora si comparar contra la cadena checkOK
       for(j=0; j < checkOK.length; j++)
           if(ch == checkOK.charAt(j))
           break;

           if(j == checkOK.length){
               allValid = false;
               break;
           }
   }

   if(!allValid){
       alert("Escriba unicamente numeros en el campo de edad");
       formulario.edad.focus();
       return false;
   }
}