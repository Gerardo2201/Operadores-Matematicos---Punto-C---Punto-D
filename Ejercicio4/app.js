// La operación misteriosa 
// Se tiene la expresión matemática siguiente:
//(20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2−4 
//Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se ejecutan las operaciones hasta llegar al resultado final.

// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crea la instancia visitas que va a permitir capturar los datos ingresados por el usuario
const  calcular= calculo();

// Se solicita al usuario que ingrese por teclado un numero que complementara la expresión matemática
let numero = parseFloat(calcular("Ingrese un numero: "));

// Se indica al programa que operación debe hacer, teniendo que despejar primero los parentesis para luego seguir con la división, multiplicación y para terminar la adición y la sustracción
let expresion = (numero+10)/5+3*2-4+(20+10)/5+3*2-4*(20+10)/5+3*2-4

//Imprimimos resultados
console.log(`El resultado de la operación es: ${expresion}`)
