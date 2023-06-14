/* 
╔══════════════════════════════════════════════════╗
║                Curso Front-End                   ║
║                   Tarea Nº 6                     ║
╠══════════════════════════════════════════════════╣
║ Alumno: Alfredo López Allende                    ║
║ RUT   : XX.XXX.XXX-3                             ║
║ Fecha Entrega: 18 de junio de 2023               ║
╚══════════════════════════════════════════════════╝
*/
// Variable que límita el rango de números a procesar.
let numero = 1000;
// Arreglo que almacena los número pares.
let numeros_pares = [];
// Arreglo que almacena los número impares.
let numeros_impares = [];
// Función que determina si un númeo es par o impar y lo almacena en el arreglo correspondiente.
function par_impar(numero) {
    for (let n = 0; n<=numero; n++)
        if (n % 2 === 0) {
            numeros_pares.push(n);
        }else {
            numeros_impares.push(n);
        }
}
// Llama a la función para buscar los números pares e impares hasta el número asignado a la variable número, en este caso 1000.
par_impar(numero);
// Muestra los número pares generados en el rango de números solicitados.
console.log(numeros_pares);
// Muestra los número pares generados en el rango de números solicitados.
console.log(numeros_impares);
// Muestra en el id=par sobre que rango de números se generó los números pares que se muestran en la consola.
document.getElementById("par").textContent = 'Los números pares entre 0 y ' + numero + ' se almacenan en un arreglo llamado numeros_pares y se muestran por consola.'
// Muestra en el id=par sobre que rango de números se generó los números pares que se muestran en la consola.
document.getElementById("impar").textContent = 'Los números impares entre 0 y ' + numero + ' se almacenan en un arreglo llamado numeros_impares y se muestran por consola.'
