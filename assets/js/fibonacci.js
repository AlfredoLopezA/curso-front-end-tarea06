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
// Arreglo que almacena la secuencia Fibonacci.
let n = 0;
// Arreglo que almacena la secuencia Fibonacci.
let secuencia_fibonacci = [];
// Función  recursiva que genera la secuencia Fibonacci.
function fibonacci(numero) {
    if (numero <= 1) {
        return numero;
    } else {
        return fibonacci(numero - 1) + fibonacci(numero - 2);
    }
}
// Ciclo que genera los número de la secuencia Fibonacci entre 0 y 1000
secuencia_fibonacci.push(fibonacci(n))
while (secuencia_fibonacci[n] <= 1000) {
    n++;
    secuencia_fibonacci.push(fibonacci(n));
}
// Muestra la secuencia Fibonacci por consola.
console.log(secuencia_fibonacci);
// Muestra la serie Fibonacci en el sitio web
document.getElementById("fibonacci").textContent = secuencia_fibonacci.join(', ');

