import * as rs from "readline-sync"

const paragraph: string =
  "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";



//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
    let paragraphLowerCase: string = fullText.toLowerCase();
    let searchTermLowerCase: string = searchTerm.toLowerCase();
    let cantidad: string[] = paragraphLowerCase.split(searchTermLowerCase);
    return cantidad.length - 1;}

let searchTerm: string = rs.question("Ingrese la palabra que desea buscar: ");
let cantidad: number = howManyTextInPara(paragraph, searchTerm);

console.log(`La palabra "${searchTerm}" aparece ${cantidad} veces en el párrafo.`);




