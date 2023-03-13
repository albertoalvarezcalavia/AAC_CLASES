// 1. Crear un array que contenga el árbol genealógico de una familia que incluya abuelos, padres, hijos y nietos con 
//    la siguiente estructura:
//    a. La primer posición tendrá los nombres de los abuelos
//    b. La segunda posición a los padres
//    c. La tercera a los hijos
//    d. La cuarta a los nietos

//    Además debe cumplir con las siguientes condiciones:
//       i. El array de los abuelos debe ser creado conteniendo a los abuelos.

let abuelos = ['Angel','Lola'];
// console.log("El array de los Abuelos es: ", abuelos);

//       ii. El array de los padres debe ser creado vacío y luego insertar a los padres.

let padres = [];
let padre1 = prompt("Introduce el nombre del primer Padre: ");
let padre2 = prompt("Introduce el nombre del segundo Padre: ");
//console.log(padre1);
//console.log(padre2);

padres[0] = padre1;
padres[1] = padre2;
// console.log("El array de los Padres es: ", padres);

//       iii. El array de los hijos debe ser creado conteniendo a los hijos.

let hijos = ['César','María'];
// console.log("El array de los Hijos es: ", hijos);

//       iv. El array de los nietos debe ser creado vació y luego insertar a los nietos.

let nietos = [];
let nieto1 = prompt("Introduce el nombre del primer Nieto: ");
let nieto2 = prompt("Introduce el nombre del segundo Nieto: ");
//console.log(nieto1);
//console.log(nieto2);

nietos[0] = nieto1;
nietos[1] = nieto2;
// console.log("El array de los Nietos es: ", nietos);

let arbol = [];
arbol[0] = abuelos;
arbol[1] = padres;
arbol[2] = hijos;
arbol[3] = nietos;

console.log("El árbol genealógico completo es: ", arbol);

//       v. Se debe imprimir en consola la cantidad de abuelos, padres, hijos y nietos.

console.log("La cantidad de Abuelos es: ", abuelos.length);
console.log("La cantidad de Padres es :", padres.length);
console.log("La cantidad de Hijos es: ", hijos.length);
console.log("La cantidad de Nietos es :", nietos.length);

//       vi. Imprimir en consola el primer abuelo, el primer padre, el primer hijo y el primer nieto

console.log("El primer Abuelo es: ", abuelos[0]);
console.log("El primer Padre es: ", padres[0]);
console.log("El primer Hijo es: ", hijos[0]);
console.log("El primer Nieto es: ", nietos[0]);



//2. Crear un programa que pida al usuario un array de palabras y muestre en consola la primera palabra.

let palabras = prompt("Vamos a crear un Array de Palabras. Introduzca una frase, o una serie de palabras aleatorias separadas por espacios en blanco:");
let arrayPalabras = palabras.split(" ");
console.log("La primera palabra del Array es: ", arrayPalabras[0]);



//3. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido 
//   por el usuario a través de un prompt se encuentra dentro del array o no.

let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUser = prompt("Introduzca un color para ver si está dentro del Array predefinido:");
// console.log(colorUser);
let encontrado = colores.find(color => color == colorUser);
if (encontrado != null){
    console.log(`El color introducido, ${colorUser}, SI está dentro del Array.`);
}else{
    console.log(`El color introducido, ${colorUser}, NO está dentro del Array.`)
}



// 4. Crear un programa que pida al usuario 5 números y los guarde en un array. Luego, mostrar en consola el array completo 
//    y la suma de los números.

let numeros = prompt("Introduzca, separados por comas, 5 números para hacer un Array:");
let arrayNumeros = numeros.split(",");
let arrayNumeros2 = arrayNumeros.map(Number);
console.log("El Array completo de números es: ", arrayNumeros2);
let sumaArray = arrayNumeros2[0] + arrayNumeros2[1] + arrayNumeros2[2] + arrayNumeros2[3] + arrayNumeros2[4];
console.log(`La suma de los números del Array es: ${sumaArray}`);



// 5. Genera un array de números aleatorios, ordenarlos de ascendente y mostrarlo por consola.

let numAleato = [];
numAleato[0] = Math.round(Math.random() * 1000);
numAleato[1] = Math.round(Math.random() * 2000);
numAleato[2] = Math.round(Math.random() * 3000);
numAleato[3] = Math.round(Math.random() * 4000);
numAleato[4] = Math.round(Math.random() * 5000);
console.log("El Array de números aleatorios es: ", numAleato);

numAleato.sort(function(a, b){return a-b});
console.log("El Array de números aleatorios ordenado ascendente: ", numAleato);

numAleato.sort(function(a, b){return b-a});
console.log("El Array de números aleatorios ordenado descendente es: ", numAleato);



//6. Crear un programa que pida al usuario un array de números y muestre en consola los números impares.

let numeros2 = prompt("Introduzca, separados por comas, números para hacer un Array:");
let arrayNumeros3 = numeros2.split(",");
let arrayNumeros4 = arrayNumeros3.map(Number);
console.log("El Array completo de números es: ", arrayNumeros4);

let arrayNumeros5 = arrayNumeros4.filter(num => num % 2 != 0);
console.log("Los números impares del Array son: ", arrayNumeros5);



//7. Crear un programa que pida al usuario un array de palabras y muestre en consola solamente las palabras que contengan 
//   la letra "a".

let palabras2 = prompt("Vamos a crear un Array de Palabras. Introduzca una serie de palabras separadas por comas:");
let arrayPalabras2 = palabras2.split(",");
console.log("El Array de palabras es: ", arrayPalabras2);

let arrayPalabras3 = arrayPalabras2.filter(a => a.includes("a"));
console.log("Palabras introducidas que llevan la letra 'a': ", arrayPalabras3);


//8. Crear dos arrays, cada uno con 5 números diferentes, generar un nuevo array con la combinación de ambos arrays. 
//   (Ejemplo: [1,2,3] + [1,2,4] = [1,1,2,2,3,4])

let arrayUno = [3,6,9,12,15];
let arrayDos = [5,10,15,20,25];

let arrayComb = [...arrayUno, ...arrayDos];
console.log("La combinación de los arrays es: ", arrayComb);



//9. Crear un programa que pida al usuario un array de palabras y muestre en consola un nuevo array que contenga las 
// palabras ordenadas alfabéticamente.

let palabras3 = prompt("Vamos a crear un Array de Palabras para luego ordenarlo. Introduzca una serie de palabras separadas por comas:");
let arrayPalabras4 = palabras3.split(",");
//console.log("El Array de palabras es: ", arrayPalabras4);

console.log("El Array de palabras, ordenado alfabéticamente es: ", arrayPalabras4.sort());