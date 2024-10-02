import * as rs from "readline-sync" 

/*1)----------------------------------------------------------------------------------
Crear un arreglo de letras e imprimirlo
*/

let letras : string[]=["a","b","c","d","e","f","g","h","i"];
for(let i :number=0;i<letras.length;i++){
   
}

console.log(letras); 

/*2)----------------------------------------------------------------------------------
Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.
*/

let nombres:string[]=new Array("juan","paco","pedro","dela","mar");
let buscado:string = rs.question(`ingrese un nombre y verificamos si esta en la lista`);
//let buscado=false;
for(let i :number=0; i<nombres.length;i++){
let ok:string;
if( nombres[i]=== buscado){
ok = "encontrado"
console.log(ok)
break

} else{
console.log(`no esta el numbre en nuestra lista`);
}
   

}  

// me gustaria solo imprimir si lo encuentra o no, pero no se hacerlo




