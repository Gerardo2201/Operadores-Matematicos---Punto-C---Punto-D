// Ejercicio 1 El terreno rectangular
//Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros. Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar. Diseña un programa en el que él pueda obtener ambos valores.

// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crean las instancias base y altura que permiten capturar los datos ingresados por el usuario
let base = calculo();
let altura = calculo();

// Se solicita al usuario que ingrese los valores para base y altura
let pedir_base = base("Ingrese el valor de la base: ");
let pedir_altura = altura("Ingrese el valor de la altura: ");

// Se convierten los datos ingresados en base y altura a un dato tipo float para poder utilizarlos en una operación matematica
let float_base = parseFloat(pedir_base)
let float_altura = parseFloat(pedir_altura)

// Se calculael area multiplicando base * altura
let area = float_base * float_altura;
// Se calcula el perimetro multiplicando por 2 el area que previamente sacamos
let perimetro = area * 2;

//Se imprimen el resultado de la operación
console.log("El area del terreno es: " + area + "\nEl perimetro del terreno es: " + perimetro);

