//Ejercicio 3: Producción de una fábrica
//Una máquina produce 250 piezas por hora.
//En 8 horas de trabajo se necesita calcular:
//• El total de piezas fabricadas.
//• Cuántas cajas de 12 piezas se llenan.
//•Cuántas piezas quedan sueltas.

//Requerimiento:
//• Usa constantes para la producción por hora, las horas trabajadas y la capacidad
//de las cajas.
//• Usa variables para el total de piezas, cajas llenas y piezas sobrantes.



// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crea la instancia visitas que va a permitir capturar los datos ingresados por el usuario
const  calcular = calculo();

//Datos de entrada solicitados al usuario
const piezas_hora = parseFloat(calcular("Ingrese cuantas piezas produce la fabrica por hora: "));
const horas_trabajo = parseFloat(calcular("Ingrese cuantas horas trabajo en la fabrica: "));

//Calculo piezas totales trabajadas en las horas de trabajo
let piezas_total = piezas_hora * horas_trabajo;

//Cantidad de cajas llenas
let cajas_llenas = piezas_total / 12;
//Cantidad de piezas sueltas
let piezas_sueltas = piezas_total % 12;

//Impresion de los resultados
console.log(`El total de piezas fabricadas en: ${horas_trabajo} horas es: ${piezas_total} \n El numero de cajas llenas de 12 piezas fueron: ${cajas_llenas} \n El numero de piezas sueltas fueron: ${piezas_sueltas}`)