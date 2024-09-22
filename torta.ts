import * as rs from "readline-sync" 
/*### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

//Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes
habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta 
tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o 
mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).
## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje 
total del pastel).
determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno
de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.
*Si lo consideran necesario, pueden implementar funciones extra.
*/


let cantidadParticipantes = rs.questionInt("ingrese cantidad de participantes: ");

let i :number =1;
let c:number=0;



while(i<=cantidadParticipantes){
let sabor : number = rs.questionInt("ingrese puntaje sabor participante " +i+":" );
let presentacion : number = rs.questionInt("ingrese puntaje participante " +i+":");
let dificultad : number =  rs.questionInt("ingrese puntaje dificultadparticipante " +i+":");
    
i=i+1
console.log(calcularPuntaje(sabor,presentacion,dificultad));


}

function calcularPuntaje(sabor:number,presentacion: number,dificultad:number) :number {

let puntaje : number = sabor+presentacion+dificultad

return puntaje
}


/*solo logre ingresar los puntajes y la cantidad de participantes, no supe resolver el resto de la consigna. intente por lo menos 
hallar el valor mas alto pero no lo logre. sigo analizando y si logro algun avance realizo una nueva entrega con otro nombre */