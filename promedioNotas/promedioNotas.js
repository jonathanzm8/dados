calcularPromedioNotas=function(){
    let nota1, nota2, nota3, promedio,promedioRedondeado;

    nota1=recuperarFlotante("txN1");
    nota2=recuperarFlotante("txN2");
    nota3=recuperarFlotante("txN3");
    promedio= calcularPromedio(nota1,nota2,nota3);

    promedioRedondeado= promedio.toFixed(2);

    cambiarTexto("lblResultado",promedioRedondeado);




}