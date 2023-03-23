'use strict'

// Todos los ejercicios deben realizarse con función flecha de JS

// 1. Crea las siguientes funciones con Arrow function (función flecha)
// a. Crear una función rectangulo que reciba como parámetros la altura y
// el ancho de un rectángulo y retorne el área.

// let rectangulo = (altura,ancho) => altura * ancho;
// console.log(rectangulo(2,4));


// b. Crear una función triangulo que reciba como parámetro la base y la
// altura de un triángulo y retorne el área.

// let triangulo = (base,altura) => (base * altura) / 2;
// console.log(triangulo(50,5));


// c. Crea una función largoDelArray que reciba como parámetro un array
// y retorne la cantidad de elementos que contiene.

// let arrayNum = [1,2,3,4,5,6];

// let largoDelArray = (array) => arrayNum.length;
// console.log(largoDelArray(arrayNum));


// d. Crea una función cantidadDeLetras que reciba como parámetro una
// palabra y devuelva la cantidad de letras que tiene.

// let palabra = "Hola caracola!";

// let cantidadDeLetras = (palabra) => palabra.length;
// console.log(cantidadDeLetras(palabra));


// e. Crea una función dolarHoy que reciba como parámetro un precio en
// euros y devuelva el precio en dólares estadounidenses.

// let cambio = 1.2;

// let dolarHoy = (precioEuro) => precioEuro * cambio;

// console.log(dolarHoy(6));


// f. Crea una función precioFinal que reciba un precio como parámetro y
// retorne el precio más el IVA (21%).

// let precioFinal = (precio) => precio * 1.21;
// console.log(precioFinal(3));


// g. Crea una función mitad que reciba un número como parámetro y
// devuelva su mitad. Tené en cuenta que el operador de división en JavaScript es “ / ”.

// let mitad = (numero) => numero / 2;
// console.log(mitad(24));


// h. Crea una función diaSegunNumero que reciba como parámetros un
// array y un número y retorne el día correspondiente al número ingresado.

// let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

// let diaSegunNumero = (arrayDias,num) => arrayDias[num - 1];
// console.log(diaSegunNumero(dias,6));



// ########################################################################################################################################
// ########################################################################################################################################
// 2. Realiza lo siguiente:
// Hacé una calculadora básica para que calcule automáticamente con 2 números recibidos como parámetro y una operación. 
// Los parámetros serán 3: num1, num2, operación.

// let calculadora = (n1,n2,operador) => {
//     switch (operador){
//         case '+':
//             return n1 + n2;
//             break;
//         case '-':
//             return n1 - n2;
//             break;
//         case '*':
//             return n1 * n2;
//             break;
//         case '/':
//             return n1 / n2;
//             break;
//         default:
//             return ("No es una operacion matematica");
//             break;
//     }
// }
// console.log(calculadora(50,2,'/'));



// ########################################################################################################################################
// ########################################################################################################################################
// 3. Creá 4 funciones que deberán tomar siempre 2 números como parámetros (num1 y num2). Sugerimos que se llamen:
// sumar
// multiplicar
// restar
// dividir
// ¿Cómo probarías tu calculadora?


// let sumar = (n1,n2) => n1 + n2;
// let multiplicar = (n1,n2) => n1 * n2;
// let restar = (n1,n2) => n1 - n2;
// let dividir = (n1,n2) => n1 / n2;

// let calculadora = (operacion,n1,n2) => operacion(n1,n2);
// console.log(calculadora(dividir,80,22));



// ########################################################################################################################################
// ########################################################################################################################################
// 4. Crea una función que reciba un parámetro, un dni, y devuelva la letra del mismo. Si el dni pasado tiene algún 
// error devolverá “”.

// let letra ="TRWAGMYFPDXBNJZSQVHLCKE"

// let dniLetra = (dni) => {
//     let idLetra = dni % 23;
//     return letra[idLetra];
// };
// console.log(dniLetra(2912510));



// ########################################################################################################################################
// ########################################################################################################################################
// 5. Crea una función que reciba un texto y lo devuelva al revés

// let texto = 'Hola caracola';
// let arrayTexto = texto.split('');
// let textoReves = (texto) => texto.reverse().join('');
// console.log(textoReves(arrayTexto));


// const invertirTexto = texto => texto.split('').reverse().join('');
// console.log(invertirTexto("CASAmala"));



// ########################################################################################################################################
// ########################################################################################################################################
// 6. Crea una función que genere número entero aleatorio entre min y max, que serán pasados como parámetros. 
//    Por defecto min = 1 y max = 100

// let aleatorio = (n1 = 100, n2 = 1) => Math.random() * (n1 -n2);
// console.log(aleatorio(87, 35));



// ########################################################################################################################################
// ########################################################################################################################################
// 7. Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y luego muestralos por pantalla

// let cienNumAleat = () => {
//     let numAleat = [];
//     let num = 0;

//     for(let i = 0; i < 100; i++){
//         do {
//             num = Math.floor(Math.random() * 1000);
//             //console.log(num);
//         } while (numAleat.includes(num));

//         numAleat.push(num);
//     }

//     console.log(numAleat);
// };

// cienNumAleat();



// ########################################################################################################################################
// ########################################################################################################################################
// 8. Realizar un programa que, pidiendo la introducción de un número, averigüe mediante una función, si dicho número que se le pase es 
// positivo, negativo o nulo. Para ello, deberá escribir en pantalla, en caso positivo, el mensaje “El número es positivo”. En el caso de 
// ser negativo escribirá “El número es negativo”. Si resulta ser nulo escribirá “El número es nulo”.

// let usuario = prompt("Introduzca un número (positivo, negativo o nulo)");
// let tipoNum = (n1) => {
//     if (Math.sign(n1) >= 0){
//         console.log('El número es positivo');
//     } else if (Math.sign(n1) < 0){
//         console.log('El número es negativo');
//     } else{
//         console.log('El número es nulo');
//     }
// };

// console.log(tipoNum(usuario));



// ########################################################################################################################################
// ########################################################################################################################################
// 9. Realizar un programa que pida la introducción de un número, y que mediante una función, averigüe si ese número es primo, 
// indicándose con mensajes que se produzcan en el cuerpo de la función principal.

// let usuario = prompt("Introduzca un número para comprobar si es un número primo, o no:");

// let primo = (num) => {
//     let resultado = 1;
//     for (let i = 2; i < num; i++) {
//         resultado = num % i;
//         if (resultado == 0)
//             break;
//     }
//     if(resultado == 0 || num <= 1){
//         console.log('El número NO es primo');
//     } else{
//         console.log('El número SI es primo');
//     }
// };

// primo(usuario);



// ########################################################################################################################################
// ########################################################################################################################################
// 10.Imaginemos que tenemos los siguientes campos en un formulario: nombre, email y comentarios. 
// Mediante la siguientes declaraciones:
// a. El campo de email debe ser una dirección de email válida. Se considera válida si contiene un ‘@’
// b. El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
// c. El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un
// dígito.
// d. Realizar una función para cada campo y valide según indica.


// let validarEmail = (email) => {
//     const arroba = /@/;
//     return arroba.test(email);
// }
// console.log(validarEmail("alberto@correo.com")); // true
// console.log(validarEmail("albertocorreo.com")); // false


// const validarComen = (comen) => {
//     let arrayComen = comen.split('');
//     if (arrayComen.length < 50){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(validarComen("1234 67 90 23456789012 4567")); // true
// console.log(validarComen("1234 67 90 23456789012 45678 01234567890 234 678901")); // false


// let validapass = (pass) => {
//     let minusculas = 'abcdefghyjklmnñopqrstuvwxyz'.split('');
//     let mayusculas = 'abcdefghyjklmnñopqrstuvwxyz'.toUpperCase().split('');
// 	let digito = '0123456789'.split('');

//     let verificar = false;
//     if (pass.length < 6)
//         return false;
//     else {

//         for (let i = 0; i < pass.length; i++) {
//              if (minusculas.includes(pass[i])){
//                  verificar = true;
//                  break;
//              }
//         }

//         if (!verificar) {
//             return false;
//         } else{
//             verificar = false;
//             for (let i = 0; i < pass.length; i++) {
//                 if (mayusculas.includes(pass[i])){
//                     verificar = true;
//                     break;
//                 }
//             }
			
// 			if (!verificar) {
// 				return false;
// 			} else{
// 				verificar = false;
// 				for (let i = 0; i < pass.length; i++) {
// 					if (digito.includes(pass[i])) {
// 						verificar = true;
// 						break;
// 					}
// 				}
// 				if (!verificar)
// 					return false;
// 				else
// 					return true;
				
// 			}
//         }
//     }


// };

// console.log(validapass('aAbBcCdD1234'))