// Ejercicio 2 Las tres notas del estudiante

// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres valores numéricos, muestre el promedio en pantalla.

// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crean las instancias de las notas que permiten a capturar los datos ingresados por el usuario
let nota1 = calculo();
let nota2 = calculo();
let nota3 = calculo();


// Se solicita al usuario que ingrese las notas obtenidas
let pedir_nota1 = nota1("Ingrese la primera nota: ");
let pedir_nota2 = nota2 ("Ingrese la segunda nota: ");
let pedir_nota3 = nota3 ("Ingrese la tercera nota: ");

// Se convierten los datos ingresados por el usuario a un dato tipo float para poder trabajar con el aritmeticamente
let float_nota1 = parseFloat(pedir_nota1);
let float_nota2 = parseFloat(pedir_nota2);
let float_nota3 = parseFloat(pedir_nota3);


// Se suman las notas ingresadas por el usuario
let notas = (float_nota1 + float_nota2 + float_nota3);

//Se dividen las notas sumadas por la cantidad de notas ingresadas para poder sacar el promedio
let promedio = notas / 3;

// Se imprimen los resultados
console.log("El promedio es:" + promedio);

