jugar=function(){

    let aleatorio;
    aleatorio=lanzarDado();

    cambiarTexto("lblNumero", aleatorio);

    if(aleatorio>3){
        mesaje= "ganaste"
        cambiarTexto("lblResultado", mesaje)

    }else{
        mesaje= "estas de malas"
        cambiarTexto("lblResultado", mesaje)



    }


}

//crear la funcion lanzarDado 
// no recibe parametros
// retorna un numero aleatorio en te 1 y 6

lanzarDado= function(){

    let aleatorio, numeroMultiplicado, numeroEntero, valorDado;
    aleatorio=Math.random();// para hacer aleatorio
    
    numeroMultiplicado= aleatorio * 6 ; // 
    // console.log(numeroMultiplicado);
    numeroEntero= parseInt(numeroMultiplicado);
    // console.log(numeroEntero);

    valorDado= numeroEntero + 1;

    // console.log(valorDado);

    return valorDado;


}