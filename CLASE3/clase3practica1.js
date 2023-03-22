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



// ##########################################################################################################################################
// ##########################################################################################################################################
// 2. Tablas de multiplicar ---------- 
// Utilizando un bucle deberás generar un array con los resultados.
// a. Creá la variable base que contendrá un número. Define también una variable de resultados que sea un array vacío.

// let numero = 2;
// let resultados = [];


// b. Crea un ciclo que recorra desde el 1 al 10.

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
// 4
// 6
// 8
// …
// for (let index = 1; index <= 10; index++) {
//     resultados.push(numero * index);
//     console.log(resultados[index - 1]);
// }

// e. Prueba el código con distintos números base para asegurar que funciona correctamente.



// #########################################################################################################################################
// #########################################################################################################################################
// 3. Obteniendo el total.
// a. Crea la variable ganancias que contenga un array.
// b. Dentro del array coloca 10 números que pueden ser positivos o negativos.
// c. Utilizando un ciclo deberás obtener el valor de la suma de todos los números del array. Tal vez necesites crear una variable 
// adicional que te permita guardar la suma.

// let ganancias = [2, 4, 6, 1, 3, -5, -1, 40, 10, 30];
// let suma = 0;

// for (let g of ganancias) {
//     suma += g;
// }
// console.log(suma);



// ########################################################################################################################################
// ########################################################################################################################################
// 4. Recorriendo arrays.
// a. Imprimí por consola la lista de temas incluídos dentro del siguiente array. Tené en cuenta de hacer que nuestro código se mantenga
// vigente aún en caso de sacar o agregar elementos al array.

// let healingIsDifficult = [
//     'Fear',
//     'Drink to Get Drunk',
//     'Taken for Granted',
//     'Blow It All Away',
//     'Get Me',
//     'Im Not Important to You',
//     'Sober and Unkissed',
//     'Healing Is Difficult',
//     'Judge Me',
//     'Little Man',
//     'Insidiously'
// ]

// healingIsDifficult.push('Kill Me');

// for (let index = 1; index <= healingIsDifficult.length; index++) {
//     console.log(healingIsDifficult[index - 1]);
// }

// for (let i of healingIsDifficult){
//     console.log(i);
// }


// b. Imprimí el mismo array anterior pero ahora modifica el código para que indique también el número de orden del track. 
// Deberías obtener:
// 1 Fear
// 2 Drink to Get Drunk
// 3 Taken for Granted
// 4 Blow It All Away
// ...

// let posicion = 0;
// for (let key in healingIsDifficult){
//     posicion = key;
//     posicion++;
//     // console.log(posicion);
//     // console.log(key);
//     console.log(`${posicion} ${healingIsDifficult[key]}`);
// }



// ########################################################################################################################################
// ########################################################################################################################################
// 5. Recorriendo arrays de objetos literales
// Dada la siguiente variable:
    // let got = [
    //     {
    //         nombre: "John",
    //         apellido: "Snow",
    //         edad: 23,
    //         ciudad: "Winterfell"
    //     },
    //     {
    //         nombre: "Daenerys",
    //         apellido: "Targaryen",
    //         edad: 19
    //     },
    //     {
    //         nombre: "Arya",
    //         apellido: "Stark",
    //         edad: 12,
    //         ciudad: "Winterfell"
    //     },
    //     {
    //         nombre: "Tyrion",
    //         apellido: "Lannister",
    //         edad: 32,
    //         ciudad: "Casterly Rock"
    //     }
    // ]

// Recorre el array de personas para:
// a. Imprimir por consola la frase: “Hola NOMBRE APELLIDO criatura viajera!”
// b. Imprimir por consola la frase: “Soy NOMBRE APELLIDO de la ciudad CIUDAD”
// Pista: probar con la notación de punto (.) para acceder a la propiedad de un objeto literal.
// Ejemplo:
//     let person = {
//         nombre: “Jonh”
//     }
//     person.nombre // “Jonh”

// for (const i of got) {
//     console.log(`Hola ${i.nombre} ${i.apellido} criatura viajera!`);
//     console.log(`Soy ${i.nombre} ${i.apellido} de la ciudad ${i.ciudad} y tengo ${i.edad} años.`);
// }



// ########################################################################################################################################
// ########################################################################################################################################
// 6. Dado un array, quitar los elementos no repetidos myArray = [ 200, 40, 400, 40, 40]

// let myArray = [ 200, 40, 400, 40, 40, 35, 200, 41, 400];
// let noRepe = [];

// for (let i of myArray){
//     // console.log(i);
//     if (!noRepe.includes(i)){
//         noRepe.push(i);
//     }
// }
// console.log(noRepe);



// ########################################################################################################################################
// ########################################################################################################################################
// 7. Usando un ciclo escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. 
// Los números se separarán por comas.
// Ejemplo: Si el usuario entra por teclado el número 5 el script devolverá la secuencia 0, 1, 2, 3, 4, 5

// let n1 = prompt("Introduzca un número entero:");
// let cuenta = '';

// for (let index = 0; index <= n1; index++) {
//     if (index != n1){
//         cuenta += `${index}, `;
//     } else{
//         cuenta += `${index}`;
//     }
// };
// console.log(cuenta);



// ########################################################################################################################################
// ########################################################################################################################################
// 8. Se trata de que dado un número entero el script muestra una cuenta atrás, es decir, una lista de números separados por coma desde 
// el número tecleado hasta el 0.
// Ejemplo: Si tecleo número 5 deberá mostrar 5,4,3,2,1.

// let n2 = prompt("Introduzca un número entero:");
// let cuentaAtrasCero = '';
// let cuentaAtrasUno = '';

// for (let index = n2; index >= 0; index--) {
//     if (index == 0){
//         cuentaAtrasCero += `${index}`;
//     } else {
//         cuentaAtrasCero += `${index}, `;
//     }
// };
// console.log("La cuenta atrás hasta Cero es: ", cuentaAtrasCero);

// for (let index = n2; index > 0; index--) {
//     if (index == 1){
//         cuentaAtrasUno += `${index}`;
//     } else {
//         cuentaAtrasUno += `${index}, `;
//     }
// };
// console.log("La cuenta atrás hasta Uno es: ", cuentaAtrasUno);


// ########################################################################################################################################
// ########################################################################################################################################
// 9. Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. 
// El resultado será de la forma "Los números enteros de 0 a n suman suma"
// Ejemplo: Si tecleo el 5 obtendré "Los enteros enteros de 0 a n suman 15" (1+2+3+4+5).

// let n3 = prompt("Introduzca un número entero:");
// let todosNum = [];
// let suma = 0;

// for (let index = 0; index <= n3; index++) {
//     todosNum.push(index);
// };

// for (let p of todosNum) {
//     suma += p;
// }
// console.log(`Los números enteros de 0 a ${n3} suman: `, suma);



// let n3 = parseInt(prompt('Introduzca un número entero:'));
// let suma = 0;

// for (let i = 1; i <= n3; i++) {
//     suma += i;
// }
// console.log(`Los números enteros de 0 a ${n3} suman: `, suma);

// ########################################################################################################################################
// ########################################################################################################################################
// 10. En este ejercicio mezclamos bucles y condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los 
// números menores que al dividirlos por 3 den como resto 2.
// Recuerda: un número es múltiplo de N es cuando al dividirlo por N el resto es 0.
// Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11

// let n4 = prompt("Introduzca un número entero:");

// for (let index = 0; index < n4; index++) {
//     if (index % 3 == 2){
//         console.log(index);
//     };
// }

