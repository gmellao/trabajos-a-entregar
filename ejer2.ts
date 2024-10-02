import * as rs from "readline-sync" 
/*Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar */

let tabla : number[] = new Array(4,7,9,3,1,45,67,23,29,78,11,16);

let mayor:number = tabla[0];

for(let i:number=0;i<tabla.length;i++){
    if(tabla[i]>mayor){
        mayor=tabla[i];
    }

 
 
}

console.log(`el numero mayor es: ${mayor}`);

if(mayor % 2===0){
    console.log(`es par`);
}else 
    console.log(`es impar`);