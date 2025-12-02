// Ejercico 1: Calculadora de gastos de viaje
// Un grupo de amigos realiza un viaje con los siguientes costos fijos:
//• Transporte: $120.000
//• Alojamiento: $200.000
//• Alimentación: $150.000
//El total debe dividirse en partes iguales entre 4 personas. Además, cada persona
//entregará $130.000 y se debe calcular el sobrante.
//Requerimiento:
//• Usa constantes para los costos y la cantidad de personas.
//• Usa variables para el total, el aporte individual y el sobrante.

// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crea la instancia calcular que va a permitir capturar los datos ingresados por el usuario
const calcular = calculo();

//Datos de entrada solicitado al usuario
const transporte = parseFloat(calcular("Ingrese cuanto se gasto en transporte:"));
const alojamiento = parseFloat(calcular("Ingrese cuanto se gasto en el alojamiento: "));
const alimentacion = parseFloat(calcular("Ingrese cuanto se gasto en alimentacion: "));
const cant_personas = parseFloat(calcular("Ingrese cantidad de personas: "))

// Operación para saber lo que gasta cada persona
let total_por_persona = (transporte + alojamiento + alimentacion) / cant_personas;

// Se fija el presupuesto de cada uno
let aporte_ind = 130000;

// Operación para conocer el sobrante de cada uno
let sobrante = aporte_ind - total_por_persona;

//Se imprimen resultados
console.log(`El total por persona es: ${total_por_persona} \nEl sobrante por persona es: ${sobrante}`)