'use strict'

// 1. Precalentando
// a. Imprimí por consola 5 veces la frase: “Practicando con el bucle for”.

// for (let index = 0; index < 5; index++) {
//     console.log("Practicando con el bucle for");
//     }

// b. Utilizando el valor de la variable “i” imprimí 10 veces por consola la frase: “La variable i tiene el valor 
// de: (reemplazar por su valor numérico)”. Usá la sintaxis template literals.


// for (let i = 0; i < 10; i++) {
//     console.log(`La variable i tiene el valor de: ${i}`);
//     }

// c. Imprimí por consola 10 múltiplos de 2 ¿Qué parte del bucle for modificarías para que i varía de 2 en 2.

// for (let i = 0; i < 20; i+=2) {
//     console.log(`La variable i tiene el valor de: ${i}`);
//     }


// d. Imprimí por consola 50 múltiplos de 5 ¿Qué parte del bucle for modificarías para que i varía de 5 en 5.

// let contador = 1;
// for (let i = 0; i < 250; i+=5) {
//     console.log(`La variable i tiene el valor de: ${i}`);
//     console.log(contador);
//     contador++;
//     }

// e. Creá un bucle for que imprime por consola los números desde el 100 al 0.
// for (let i = 100; i >= 0; i--) {
//     console.log(`La variable i tiene el valor de: ${i}`);
//     }



// 2. Tablas de multiplicar ---------- 
// Utilizando un bucle deberás generar un array con los resultados.
// a. Creá la variable base que contendrá un número. Define también una variable de resultados que sea un array vacío.

// let numero = 2;
// let resultados = [];


// b. Crea un ciclo que recorra desde el 1 al 10.

// for (let index = 1; index <= 10; index++) {
        
// }


// c. En cada iteración deberás multiplicar el número base por cada valor de la iteración y guardar el resultado dentro 
// del array. Para ello necesitarás usar uno de los métodos de arrays que te permite agregar elementos.
// El array de resultados debe contener la tabla de multiplicar del número base. Por ejemplo, si base es 2, resultados 
// debe ser [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// for (let index = 1; index <= 10; index++) {
//      resultados.push(numero * index);
// }
// console.log(resultados);



// d. Imprimir el array de resultados en consola. De esta forma:
// 2
// 468
// …
// for (let index = 1; index <= 10; index++) {
//     resultados.push(numero * index);
//     console.log(resultados[index - 1]);
// }

// e. Prueba el código con distintos números base para asegurar que funciona correctamente.

