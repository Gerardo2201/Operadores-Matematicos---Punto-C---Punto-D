//Ejercicio 4: Estadísticas de calificaciones
//Un aprendiz obtuvo las siguientes 4 notas: 4.5, 3.8, 2.9 y 4.0.
//Se debe calcular:
//• La suma de las 4 notas.
//• El promedio.
//• El resultado de la siguiente operación:
//(nota1 + nota2) * (nota3 + nota4) / 2;
//Requerimiento:
//• Declara cada nota como constante.
//• Usa variables para la suma, el promedio y el resultado de la expresión.


// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crea la instancia visitas que va a permitir capturar los datos ingresados por el usuario
const  calcular = calculo();

const nota1 = parseFloat(calcular("ingrese la primera nota: "));
const nota2 = parseFloat(calcular("ingrese la segunda nota: "));
const nota3 = parseFloat(calcular("ingrese la tercera nota: "));
const nota4 = parseFloat(calcular("ingrese la cuarta nota: "));

let suma_notas = nota1 + nota2 + nota3 + nota4;

let promedio_notas = suma_notas / 4;

let resultado_operacion = (nota1 + nota2) * (nota3 + nota4) / 2;

console.log(`La suma de las 4 notas es: ${suma_notas} \n El promedio de las notas es: ${promedio_notas} \n El resultado de la operación designada es: ${resultado_operacion}`)