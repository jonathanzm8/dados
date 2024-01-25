let puntos, lanzamientos
puntos= 0;
lanzamientos=5;
let lanzar= 1;


jugar=function(){
    
    let resultado;
    resultado=lanzarDado();
    // console.log(resultado);
    mostarDadoImagen(resultado);
    modificarPuntos(resultado);
    modificicarLanzamientos(lanzamientos);
   
}



modificarPuntos=function(numeros){
    puntos=puntos+numeros;
    cambiarTexto("lblPuntos", puntos)
    //si el jugador obtiene mas de 20 puntos 
    //mostarar en pantalla que GANASTE
    //invovar a limpiar 
    if(puntos>=20){
        cambiarTexto("lblGano","GANASTE!!")

        limpiar("lblPuntos", "0")

        
            
    }
   

}

modificicarLanzamientos=function(){
        

        lanzamientos=lanzamientos-lanzar;

        cambiarTexto("lblLanzar",lanzamientos)

        if(lanzamientos==0){
            cambiarTexto("lblGano","GAMER OVER")

            

            
        }           

}   



limpiar=function(){

    cambiarTexto("lblPuntos","")
    cambiarTexto("lblLanzar","")
    cambiarTexto("lblGano","")


}

// ----------------------------------------------------------------------------------------------------------

// funcion mostarDadoImagen recibe en numero que quiere mostar
// mustra la imagen de acuedo al numero que recibe
// no retorna nada 


mostarDadoImagen=function(numero){
    if(numero==1){
        cambiarImagen("imgDado1","dados1.png")
    }else if(numero==2){
        cambiarImagen("imgDado1","dados2.png")

    }else if(numero==3){
        cambiarImagen("imgDado1","dados3.png")

    }else if(numero==4){
        cambiarImagen("imgDado1","dados4.png")

    }else if(numero==5){
        cambiarImagen("imgDado1","dados5.png")

    }else if(numero==6){
        cambiarImagen("imgDado1","dados6.png")

    }
}




lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}