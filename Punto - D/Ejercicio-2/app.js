//Ejercicio 2: Conversor de tiempo
//Un aprendiz registró 7.200 segundos de actividad física. Necesita expresarlos en:
//• Minutos.
//• Horas.
//• Días.
//Requerimiento:
//• Usa una constante para los segundos.
//• Declara variables para almacenar las conversiones.


// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crea la instancia calcular que va a permitir capturar los datos ingresados por el usuario
const calcular = calculo();

const registrar_segundos = parseInt(calcular("Ingrese la cantidad de segundos registrados: "))

let minutos = registrar_segundos / 60

let horas = minutos/60

let dias = horas/24

console.log(`El aprendiz registro ${minutos} minutos, ${horas} horas, y ${dias} en actividad física`)