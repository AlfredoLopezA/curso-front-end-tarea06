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
// Arreglo original el nombre pokemon se cambio por pokemon_tipo para evitar errores de ejecución.
let pokemon_tipo = [{nombre: 'Pikachu',
                tipo: 'Electrico'
                },
                {
                nombre: 'Charmander',
                tipo: 'Fuego',
                },
                {
                nombre: 'Bulbasaur',
                tipo: 'Planta'
                },
                {
                nombre: 'Squirtle',
                tipo: 'Agua'
                },
                {
                nombre: 'Charmeleon',
                tipo: 'Fuego'
                },
                {
                nombre: 'Weedle',
                tipo: 'bicho'
                },
                {
                nombre: 'Charizard',
                tipo: 'Fuego'
                }
                ]

// Se aplica el método filter para extraer los pokemon del tipo fuego al nuevo arreglo.
const pokemon_fuego = pokemon_tipo.filter(elemento => elemento.tipo == 'Fuego')
// Muestra en la consola los datos del arreglo original.
console.log(pokemon_tipo);
// Muestra en la consola los datos del nuevo arreglo con los pokemon tipo fuego.
console.log(pokemon_fuego);
// Muestra en la página los datos del arreglo original.
document.getElementById("pokemon-tipo").textContent = 'pokemon = ' + JSON.stringify(pokemon_tipo);
// Muestra en la página los datos del nuevo arreglo con los pokemon tipo fuego.
document.getElementById("pokemon-fuego").textContent = 'pokemon_fuego = ' + JSON.stringify(pokemon_fuego);
