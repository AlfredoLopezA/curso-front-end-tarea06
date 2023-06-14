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
// Arreglo original.
let pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']
// Arreglo que almacena los nombres en mayúsculas.
let pokemon_mayusculas = []
// Para convertir los nombres a mayúsculas y almacenarlos en el arreglo pokemon_mayusculas.
function nombre_pokemon_mayuscula(pokemon) {
    // Ciclo que recorre el arreglo original para almacenar los nombre en el formato indicado.
    pokemon.forEach((elemento) => {
        pokemon_mayusculas.push(elemento.toUpperCase());
    });
}
// Llama la función para ejecutar el proceso.
nombre_pokemon_mayuscula(pokemon);
// Muestra los resultados en la consola.
console.log(pokemon_mayusculas);
// Muestra en la página los datos del arreglo original.
document.getElementById("pokemon-original").textContent = 'pokemon = [' + pokemon.join(', ') + ']';
// Muestra en la página los datos del nuevo arreglo con los pokemon tipo fuego.
document.getElementById("pokemon-mayusculas").textContent = 'pokemon_mayusculas = [' + pokemon_mayusculas.join(', ') + ']';