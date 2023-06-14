# curso-front-end-tarea06
Entrega 18 de junio de 2023.
Este repositorio contiene un archivo html, un archivo de estilos css y 4 archivos javascript para realizar los puntos exigidos en la tarea Nº 6, que son los siguientes:
Tarea Nº6
1. Mostrar en consola la secuencia de Fibonacci:
    a. Entre los números 0 y 1000.
    b. Números pares entre 0 y 1000.
    c. Números impares entre 0 y 1000.
    Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase
2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.
- El archivo index.html muestra los resultados en una página web, excepto los número pares e impares por la cantidad de datos. Todos los puntos requeridos se muestran por consola sus resultados.
- El archivo estilo.css es una hoja de estilos con el formato que tiene index.html
- El archivo fibonacci.js contiene la función para determinar la serie de Fibonacci desde 0 hasta 1000 y entrega los resultados de esta operación por consola y en la página dentro del div clase=layout-header carga la serie en la etiqueta h2 con id=fibonacci.
- El archivo parimpar.js contiene la función par_impar para determinar que números son pares e impares en el rango 0 a valor de la variable numero, en este caso 1000. La funcíón almacena los números en sus respectivos arreglos (numeros_pares, numeros_impares), finalmente muestra el contenidos de los arreglos por consola.
- El archivo pokemon_mayusculas.js contiene la función nombre_pokemon_mayuscula que recibe como parametro el arreglo pokemons que se recorre cada elemento con el ciclo forEach y se almacena cada nombre en mayúsculas en el arreglo pokemon_mayusculas. El resultado se muestra por consola y además en la página anidado en la etiquera div clase=layout-pokemon-mayusculas se carga en la etiqueta p de id=pokemon-original el arreglo original y en la etiqueta p id=pokemon-mayusculas el nuevo arreglo.
- Finalmnete, el archivo pokemonfuego.js contiene el arreglo pokemon_tipo al que se aplica el método filter para cargar en un nuevo arreglo de nombre pokemon_fuego todos los pokemos de tipo Fuego. El resultado se muestra por consola y además en la página anidado en la etiquera div clase=layout-pokemon-fuego se carga en la etiqueta p de id=pokemon-tipo el arreglo pokemon_tipo con los datos originales y en la etiqueta p id=pokemon-fuego el nuevo arreglo pokemon_fuego con los pokemon del tipo mencionado.