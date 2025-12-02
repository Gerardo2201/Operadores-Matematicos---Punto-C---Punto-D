// El contador de visitas Un sitio web comienza con un contador de visitas en 100. En un día recibe 25 visitas adicionales, luego pierde 10 por un error de registro, y finalmente se duplican las visitas. Representa esta situación y determina cuál es el valor final del contador.


// Se importa la biblioteca "prompt-sync" para permitir la lectura de datos por teclado
import calculo from "prompt-sync";

// Se crea la instancia visitas que va a permitir capturar los datos ingresados por el usuario
const visitas = calculo();

// Se solicita al usuario que ingrese la cantidad de visitas
let cant_visitas = visitas("Ingrese la cantidad de visitas: ")

// Se convierte el dato ingresado a un tipo entero para poder trabajar con el de forma aritmetica
let int_visitas = parseInt(cant_visitas)

// Se realiza el calculo solicitado, se suman 25 visitas, se restan 10 por un error de registro y se multiplica por 2
let visitas_adicionales = (int_visitas + 25 - 10) * 2;

console.log(`El valor final de las visitas es: ${visitas_adicionales}`)
 