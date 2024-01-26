calcularPromedioNotas=function(){
    let nota1, nota2, nota3, promedio,promedioRedondeado;

    nota1=recuperarFlotante("txN1");
    nota2=recuperarFlotante("txN2");
    nota3=recuperarFlotante("txN3");
    promedio= calcularPromedio(nota1,nota2,nota3);

    promedioRedondeado= promedio.toFixed(2);
    console.log(promedioRedondeado)

    // cambiarTexto("lblResultado",promedioRedondeado);
    // esto del ejecion anterios de notas de promedio-----------------
    // if(promedioRedondeado>7){
    //     cambiarImagen("lblImg","./imagenes/feliz.gif")

    // }else{
    //     cambiarImagen("lblImg","./imagenes/triste.gif")

    // }

        if(promedioRedondeado<5 && promedioRedondeado>0){
            cambiarTexto("lblResultado","REPROBADO")
            cambiarImagen("lblImg","./imagenes/triste.gif")
    
            }else if(promedioRedondeado>=5 && promedioRedondeado<=8){
                cambiarTexto("lblResultado","BUENTRABAJO")
                cambiarImagen("lblImg","./imagenes/buenTrabajo.gif")
    

            }else if(promedioRedondeado>8 && promedioRedondeado<=10){
                cambiarTexto("lblResultado","EXCELENTE")
                cambiarImagen("lblImg","./imagenes/excelente.gif")
                 

            }else{

                cambiarTexto("lblResultado","DATOS INCORRECTOS")
                cambiarImagen("lblImg","./imagenes/error.gif")

            }
            



}