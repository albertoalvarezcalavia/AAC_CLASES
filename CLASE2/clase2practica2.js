// 1. Crear un array que contenga el árbol genealógico de una familia que incluya
// abuelos, padres, hijos y nietos con la siguiente estructura:

// a. La primer posición tendrá los nombres de los abuelos
// b. La segunda posición a los padres
// c. La tercera a los hijos
// d. La cuarta a los nietos

//let arbol = [['abuelo1','abuelo2'],['padre1','padre2'],['hijo1','hijo2'],['nieto1','nieto2']]

// Además debe cumplir con las siguientes condiciones:
// i. El array de los abuelos debe ser creado conteniendo a los abuelos.

let abuelos = ['abuelo1','abuelo2'];
//console.log(abuelos)

// ii. El array de los padres debe ser creado vacío y luego insertar a los padres.

let padres = [];
let padre1 = prompt("Introduce el nombre del primer padre: ");
let padre2 = prompt("Introduce el nombre del segundo padre: ");
// console.log(padre1);
// console.log(padre2);

padres[0] = padre1;
padres[1] = padre2;
// console.log(padres);

// iii. El array de los hijos debe ser creado conteniendo a los hijos.

let hijos = ['hijo1','hijo2']

// iv. El array de los nietos debe ser creado vació y luego insertar a los nietos.

let nietos = [];
let nieto1 = prompt("Introduce el nombre del primer nieto: ");
let nieto2 = prompt("Introduce el nombre del segundo nieto: ");
//console.log(nieto1);
//console.log(nieto2);

nietos[0] = nieto1;
nietos[1] = nieto2;
// console.log(nietos);

// v. Se debe imprimir en consola la cantidad de abuelos, padres, hijos y nietos.

let arbol = [];
arbol[0] = abuelos;
arbol[1] = padres;
arbol[2] = hijos;
arbol[3] = nietos;

console.log(arbol);

// vi. Imprimir en consola el primer abuelo, el primer padre, el primer hijo y el primer nieto



